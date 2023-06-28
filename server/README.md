#### backend here

API
Backend postman request instructions:

Date format: "MM/DD/YYYY 00:00" -> "12/30/2023 24:00"

Store an array with 3 items in DB from postman Body > form-data:
NO > List1 = [item 1, item 2, item 3]
Yes > List1 = item1
      List1 = item2
      List1 = item3

POST request: 
"http://localhost:${PORT}/postEvent"
POST > Body > form-data: Key value pairs example:
eventBannerImage: abcd.jpg
about: This is an event.
frequency: 3

GET request:
GET all events: "http://localhost:${PORT}/events"

GET events by clubName: "http://localhost:${PORT}/events?clubname=<clubName>

GET events by clubName and sort by eventDate(asc): 
                "http://localhost:${PORT}/events?clubname=<clubName>&sort=eventDate

GET events by clubName and sort by eventDate(dec): 
                "http://localhost:${PORT}/events?clubname=<clubName>&sort=-eventDate

Pagination:
GET page 1, 5 results per page:
                "http://localhost:${PORT}/events?page=1&limit=5"


PUT request: 
    find by event brief id and update
    "http://localhost:${PORT}/events/:<eventBriefId>"

PUT > Body > form-data: Key value pairs example:
eventBannerImage: abcd.jpg
about: This is an event.
frequency: 3

--------------------------------------------------------------------------------------


frontend usr instructions