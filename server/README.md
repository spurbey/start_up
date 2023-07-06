#### backend here


>>> Backend postman API request instructions:

Date format: "MM/DD/YYYY 00:00" -> "12/30/2023 24:00"

Store an array with 3 items in DB from postman Body > form-data:
NO > List1 = [item 1, item 2, item 3]

Yes > List1 = item1
      List1 = item2
      List1 = item3

>>> EVENTS API interface 

### POST request: 
>>> create an event
"http://localhost:<PORT>/postEvent"

(with image upload) POST > Body > form-data:  
eventBannerImage: abcd.jpg (click on drop down arrow in key field and click file)
about: This is an event.
frequency: 3

(No image upload) POST > Body > raw (JSON):
{
    "about": "This is an event".
    "frequency": 3
}

### GET requests:
GET all events: "http://localhost:<PORT>/events"

GET events by clubName: "http://localhost:<PORT>/events?clubname=<clubName>

GET events by clubName and sort by eventDate(asc): 
                "http://localhost:<PORT>/events?clubname=<clubName>&sort=eventDate

GET events by clubName and sort by eventDate(dec): 
                "http://localhost:<PORT>/events?clubname=<clubName>&sort=-eventDate

Pagination:
GET page 1, 5 results per page:
                "http://localhost:<PORT>/events?page=1&limit=5"


### PUT request: 
>>> find by event brief id and update
    "http://localhost:<PORT>/events/:<eventBriefId>"

(incl. image modify) POST > Body > form-data
eventBannerImage: abcd.jpg
about: This is an event.
frequency: 3

(No image modify) POST > Body > raw (JSON):
{
    "about": "This is an event".
    "frequency": 3
}

--------------------------------------------------------------------------------------
>>> CLUBS API interface 

### POST request: 
>>> register a club:
"http://localhost:<PORT>/createclub"

(with image upload) POST > Body > form-data:  
    ownerId: John1,
    clubPfpImage: abcd.jpeg (click on drop down arrow in key field and click file)
    clubname: ABC club,
    about: This is a club.,
    rating: 5

(without image upload) POST > Body > raw (JSON):
{
    "ownerId": "John1",
    "clubname": "ABC club",
    "about": "This is a club.",
    "rating": 5
}

>>> upload club featured images:
http://localhost:<PORT>/clubs
 POST > Body > form-data:  
    _id: <DB collection id>  (for eg. 6492e795529253c84e8e2281)
    featuredImages: 3 files selected (up to 3 files, click on drop down arrow in key field and click file)
    featImgTitle1: Club building.jpeg
    featImgTitle2: Team.jpeg
    featImgTitle3: office.jpeg



### GET requests:
GET all clubs: "http://localhost:<PORT>/clubs"

GET clubs by clubCode: "http://localhost:<PORT>/clubs?clubCode=<clubCode>

GET clubs by clubCode and sort by greisered date(asc): 
                "http://localhost:<PORT>/clubs?clubCode=<clubCode>&sort=createdAt
GET clubs by clubCode and sort by registered date(dec): 
                "http://localhost:<PORT>/clubs?clubCode=<clubCode>&sort=-createdAt

Pagination:
GET page 1, 5 results per page:
                "http://localhost:<PORT>/clubs?page=1&limit=5"


### PUT request: 
>>> find by _id and update
    "http://localhost:<PORT>/clubs"

{
    "_id": "<DB collection id>"  (for eg. 6492e795529253c84e8e2281)
    "ownerId": "Ram01",
    "twitter": "@club1",
    "Clubname": "TClub1 Ktm",
}

==================================================================================

>>> ORGANIZATIONS API interface 
### POST request: 
register an organization:
"http://localhost:<PORT>/orgs"

(with image upload) POST > Body > form-data:  
    orgName: Abc Org,
    ownerId: Ram01,
    orgLogoImage: abcd.jpeg (click on drop down arrow in key field and click file)
    verified: true,
    about": This is an org.,
    sponsoredEventsIds": {event1, event2, event3}

(without image upload) POST > Body > raw (JSON):
{
    "orgName": "Abc Org",
    "ownerId": "Ram01",
    "verified": "true",
    "about": "This is an org.",
    "sponsoredEventsIds": "{event1, event2, event3}"
}

### GET requests:
GET all organizations: "http://localhost:<PORT>/orgs"

GET organizations by orgName: "http://localhost:<PORT>/orgs?orgname=<clubName>

GET organizations by orgName and sort by bidsWon(asc): 
                "http://localhost:<PORT>/orgs?orgName=<clubName>&sort=bidsWon

GET organizations by orgName and sort by eventDate(dec): 
                "http://localhost:<PORT>/orgs?orgName=<clubName>&sort=-bidsWon

Pagination:
GET page 1, 5 results per page:
                "http://localhost:<PORT>/orgs?page=1&limit=5"


### PUT request: 
    find by orgCode and update
    "http://localhost:<PORT>/orgs/:<orgCode>"

(with image upload) POST > Body > form-data:  
    orgName: Abc Org,
    ownerId: Ram01,
    orgLogoImage: abcd.jpeg (click on drop down arrow in key field and click file)
    verified: true,
    about: This is an org.,
    sponsoredEventsIds: {event1, event2, event3}

(without image upload) POST > Body > raw (JSON):
{
    "orgName": "Abc Org",
    "ownerId": "Ram01",
    "verified": "true",
    "about": "This is an org.",
    "sponsoredEventsIds": "{event1, event2, event3}"
}

==================================================================================

>>> Auction/ Bidding API interface 

### Post to Initialize a bidding
http://localhost:8000/initBid
POST > body > raw (JSON)
{
    "clubCode": "clubDEF",
    "eventBriefId": "event11111",
    "biddingStartTime": "09/25/2023 06:00",
    "biddingEndTime": "06/30/2023 06:00",
    "minimumSeedAmount": "1000",
    "incrementAmount": "500"
}
response:
{
    "data": {
        "clubCode": "clubDEF",
        "eventBriefId": "event11111",
        "biddingStartTime": "2023-09-24T22:00:00.000Z",
        "biddingEndTime": "2023-06-29T22:00:00.000Z",
        "isAuctionLive": false,
        "eta": "87 days 9 hours and 1 minute", 
        "minimumSeedAmount": 1000,
        "incrementAmount": 500,
        "currentTopBid": 0,
        "createdAt": "2023-06-29T12:56:16.599Z",
        "updatedAt": "2023-06-29T12:56:16.599Z",
        "_id": "649d800ec65c9de83701dc81",
        "__v": 0
    },
    "msg": "Bidding detials set up successfully."
}

### Place a bid 
––-
PUT > Body > raw(JSON)
{
    "incrementAmount": "500",
    "bidPlacingOrgCode": "Org2",
    "bidPlacedMultiple": "3",    
    "currentTopBid": "0",
    "biddingEndTime": "09/30/2023 06:00",
    "isAuctionLive": true
}
<!-- (use data from POST response in auction setup POST request) -->

response:
{
    "data": {
        "_id": "649d89b1c9960c69bc0359e8",
        "clubCode": "clubDEF",
        "eventBriefId": "event11111",
        "biddingStartTime": "2023-06-24T22:00:00.000Z",
        "biddingEndTime": "2023-09-29T22:00:00.000Z",
        "isAuctionLive": true,
        "minimumSeedAmount": 1000,
        "incrementAmount": 500,
        "currentTopBid": 30000,
        "createdAt": "2023-06-29T13:38:24.495Z",
        "updatedAt": "2023-06-29T13:38:24.495Z",
        "__v": 0,
        "bidPlacedMultiple": 3,

        "bidPlacingOrgCode": "Org2",
        "biddersAndAmounts": {
            "Org2": 1500,
            "Org6": 30000,
        }
    },
    "msg": "Placed a bid successfully."
}

==================================================================================

>>> Bookmarks API interface 

### Add a bookmark: 
http://localhost:<PORT>/bookmarks
PUT > Body > Raw (JSON)
<!-- (_id is user's id in the DB) -->
request: {
    "_id": "649eb4e528fd5f17de63bac0",  
    "bookmarks": "event_id_1"
}

### Get bookmarks list
http://localhost:<PORT>/bookmarks
GET > Body > Raw (JSON)
request:
{
    "_id" : "649eb4e528fd5f17de63bac0"
}
response:
{
    "data": {
        "_id": "649eb4e528fd5f17de63bac0",
        "email": "user1@gmail.com",
        "username": "user1",
        "password": "$2a$10$aqSmqWvCrVN.P879ja7bhegcSgTDYIZEmJ9Tu4wqLB4Lm5ffnnTvK",
        "bookmarks": [
            "event_id_1",
            "event_id_2",
            "event_id_3",
            "event_id_5",
            "event_id_6"
        ],
        "createdAt": "2023-06-30T10:56:37.044Z",
        "updatedAt": "2023-06-30T10:56:37.044Z",
        "__v": 0
    }
}

### Remove a bookmark
http://localhost:<PORT>/removeBookmark
GET > Body > Raw (JSON)
request:
{
    "_id": "649eb4e528fd5f17de63bac0",
    "bookmarks": "event_id_1"
}
