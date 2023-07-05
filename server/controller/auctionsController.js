import Bids from "../model/bidSchema.js"
import getDayHourMinute from "../utils/getAuctionEta.js"


export const setUpAuction = async (req, res) => {

    try {

        let BiddingStartTime = new Date(req.body.biddingStartTime);
        let CurrentDateTime = new Date(Date.now());
        let IsAuctionLive = false;
        let ETAinMilliSeconds
        let FormattedEta


        if (BiddingStartTime.getTime() < CurrentDateTime.getTime()) {
            IsAuctionLive = true
        } else {
            IsAuctionLive = false
            ETAinMilliSeconds = BiddingStartTime.getTime() - CurrentDateTime.getTime()
            FormattedEta = getDayHourMinute(ETAinMilliSeconds)
        }

        let updatedReq = { ...req.body, isAuctionLive: IsAuctionLive, auctionStartEta: FormattedEta }
        console.log(updatedReq)
        const data = await Bids.create(updatedReq)
        if (data) {
            res.status(200).json({
                data,
                msg: "Auction set up successfully."
            })

            // ==================================
            // // set timer go get end auction
            // let BiddingEndTime = new Date(req.body.biddingEndTime)
            // let CurrentDateTime = new Date(Date.now());
            // let AuctionEndEtaInMilliSeconds

            // AuctionEndEtaInMilliSeconds = BiddingEndTime.getTime() - CurrentDateTime.getTime()
            // setTimeout(() => {
            //     res.status(200).json({
            //         msg: "Auction has successfully ended."
            //     })
            // }, AuctionEndEtaInMilliSeconds);
            // ==================================
            
        } else {
            res.status(401).json({
                msg: "Failed to set up auction."
            })
        }

    } catch (error) {
        console.log(error)
    }
}


export const placeABid = async (req, res) => {
    console.log(req.body.isAuctionLive)
    
            // Get auction end ETA
            let BiddingEndTime = new Date(req.body.biddingEndTime)
            let CurrentDateTime = new Date(Date.now());
            let AuctionEndEtaInMilliSeconds
            let FormattedAuctionEndEta

            AuctionEndEtaInMilliSeconds = BiddingEndTime.getTime() - CurrentDateTime.getTime()
            FormattedAuctionEndEta = getDayHourMinute(AuctionEndEtaInMilliSeconds)

            // request parameters
            let MinimumSeedAmount = req.body.minimumSeedAmount
            let IncrementAmount = req.body.incrementAmount
            let BidPlacedMultiple = req.body.bidPlacedMultiple
            let BidPlacingOrgCode = req.body.bidPlacingOrgCode + " on " + Date();
            let CurrentTopBid = req.body.currentTopBid;
            
            // Check that the bid amount exceeds seed amount
            if (IncrementAmount * BidPlacedMultiple >= MinimumSeedAmount) {
                // Check that the bid amount exceeds previous bid amount
                if (IncrementAmount * BidPlacedMultiple > CurrentTopBid) {

                    try {
                        //Assign the latest put request bid amount as the currentTopBid amount
                        CurrentTopBid = IncrementAmount * BidPlacedMultiple; 

                        console.log("incrementAmount: " + IncrementAmount, "BidPlacedMultiple: " + BidPlacedMultiple, "MinimumSeedAmount: " + MinimumSeedAmount, "CurrentTopBid: " + CurrentTopBid, "BidPlacingOrgCode: " +  BidPlacingOrgCode,  "BidPlacingOrgCode: " + FormattedAuctionEndEta)

                        const updatedReq = { ...req.body, currentTopBid: CurrentTopBid, bidPlacingOrgCode: BidPlacingOrgCode, auctionEndEta: FormattedAuctionEndEta }

                        const data1 = await Bids.findOneAndUpdate(req.eventBriefId, updatedReq )
                        const data2 = await Bids.findOneAndUpdate(req.eventBriefId, {$push : {"biddingOrgsList": BidPlacingOrgCode,  "bidAmountsList": CurrentTopBid} } )
                        if (data2) {
                            res.status(200).json({
                                data1,
                                data2,
                                msg: "Placed a bid successfully."
                            })
                            
                        } else {
                            res.status(401).json({
                                msg: "Failed to place your bid."
                            })
                        }

                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    res.status(401).json({
                        msg: "New bid amount must be greater than the current top bid."
                    })
                }
            } else {
                res.status(401).json({
                    msg: `Seed amount you placed doesn't satisfy the requirement set by the club.`
                })
        res.status(401).json({
            msg: "This auction is not live."
        })
    }

}

// export const getAuctionWinner = async (req, res) => {
//     try {
//         let BiddingEndTime = new Date(req.body.biddingEndTime)
//             let CurrentDateTime = new Date(Date.now());
//             let AuctionEndEtaInMilliSeconds

//             AuctionEndEtaInMilliSeconds = BiddingEndTime.getTime() - CurrentDateTime.getTime()

//         setTimeout(async() => {
//             let BiddingOrgsList = []
//             let BidAmountsList = []
//             let BiddingOrgsListLength = 0
//             let BidAmountsListLength = 0
    
//             const finalData = await Bids.find(req.query)
//             {
//                 if (finalData){
//                     console.log(finalData)
//                 BiddingOrgsList = finalData[0].biddingOrgsList
//                 BidAmountsList = finalData[0].bidAmountsList
//                 BiddingOrgsListLength = BiddingOrgsList.length
//                 BidAmountsListLength = BidAmountsList.length
//                 // console.log(BiddingOrgsListLength, BidAmountsListLength)
//                 res.status(200).json({
//                     auctionConcluded : true,
//                     auctionWinningOrg:  BiddingOrgsList[BiddingOrgsListLength - 1],
//                     auctionWinningBidAmount:  BidAmountsList[BidAmountsListLength - 1],
//                     msg: "The auction has sucessfully concluded!"
//                 })
//             }}
//         }, AuctionEndEtaInMilliSeconds);
//     }catch(error){
//         console.log(error)
//     }
    
// }

export const getAuctionWinner = async (req, res) => {
    try {
        let BiddingEndTime = new Date(req.body.biddingEndTime)
            let CurrentDateTime = new Date(Date.now());
            let AuctionEndEtaInMilliSeconds

            AuctionEndEtaInMilliSeconds = BiddingEndTime.getTime() - CurrentDateTime.getTime()

        setTimeout(async() => {
            let BiddingOrgsList = []
            let BidAmountsList = []
            let auctionWinningOrg=  ""
            let auctionWinningBidAmount=  ""
    
            const finalData = await Bids.find(req.query)
            {
                if (finalData){
                    console.log(finalData)
                BiddingOrgsList = finalData[0].biddingOrgsList
                BidAmountsList = finalData[0].bidAmountsList
                auctionWinningOrg = BiddingOrgsList[BiddingOrgsList.length - 1]
                auctionWinningBidAmount = BidAmountsList[BidAmountsList.length - 1]
                // console.log(BiddingOrgsListLength, BidAmountsListLength)
                res.status(200).json({
                    auctionConcluded : true,
                    auctionWinningOrg,
                    auctionWinningBidAmount,
                    msg: "The auction has sucessfully concluded!"
                })
            }}
        }, AuctionEndEtaInMilliSeconds);
    }catch(error){
        console.log(error)
    }
    
}



export const getBidDetails = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
