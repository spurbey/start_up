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

        let updatedReq = {...req.body, isAuctionLive: IsAuctionLive, auctionStartEta: FormattedEta}
        console.log(updatedReq)
        const data = await Bids.create(updatedReq)
        if (data) {
            res.status(200).json({
                data,
                msg: "Auction set up successfully."
            })
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
    if (req.body.isAuctionLive){

        let BiddingEndTime = new Date(req.body.biddingEndTime)
        let CurrentDateTime = new Date(Date.now());
        let AuctionEndEtaInMilliSeconds 
        let FormattedAuctionEndEta

        AuctionEndEtaInMilliSeconds = BiddingEndTime.getTime() - CurrentDateTime.getTime()
        FormattedAuctionEndEta = getDayHourMinute(AuctionEndEtaInMilliSeconds)
            

            let IncrementAmount = req.body.incrementAmount
            let BidPlacedMultiple = req.body.bidPlacedMultiple
            let MinimumSeedAmount = req.body.minimumSeedAmount
            let BidPlacingOrgCode = req.body.bidPlacingOrgCode + " " + Date();
            let BiddersAndAmountsObj = req.body.biddersAndAmounts
            let CurrentTopBid = req.body.currentTopBid;

            if (IncrementAmount * BidPlacedMultiple >= MinimumSeedAmount) {
                if (IncrementAmount * BidPlacedMultiple > CurrentTopBid) {

                    try {
                        BiddersAndAmountsObj[BidPlacingOrgCode] = IncrementAmount * BidPlacedMultiple;

                        CurrentTopBid = CurrentTopBid + (IncrementAmount * BidPlacedMultiple);
                        
                        console.log(IncrementAmount, BidPlacedMultiple, MinimumSeedAmount, BidPlacingOrgCode, BiddersAndAmountsObj, FormattedAuctionEndEta)

                        const updatedReq = { ...req.body, biddersAndAmounts: BiddersAndAmountsObj, currentTopBid: CurrentTopBid, auctionEndEta: FormattedAuctionEndEta }

                        const data = await Bids.findOneAndUpdate(req.eventBriefId, updatedReq, {$set: {"biddersAndAmounts.BidPlacingOrgCode":CurrentTopBid}})
                        if (data) {
                            res.status(200).json({
                                data,
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
            }
    }else{
        res.status(401).json({
            msg: "This auction is not live."
        })
    }
}


export const getBidDetails = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

