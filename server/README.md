#### backend here


>>> Backend postman API request instructions:

Date format: "MM/DD/YYYY 00:00" -> "12/30/2023 24:00"

Store an array with 3 items in DB from postman Body > form-data:
NO > List1 = [item 1, item 2, item 3]
Yes > List1 = item1
      List1 = item2
      List1 = item3

>>> EVENTS API interface <<<

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
>>> CLUBS API interface <<<

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


--------------------------------------------------------------------------------------
>>> ORGANIZATIONS API interface <<<

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

--------------------------------------------------------------------------------------

frontend usr instructions: