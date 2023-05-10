# INF653Final

## Requirements of Project

### Your REST API will provide responses to the following GET requests:
Request: &emsp;&emsp; Response:

/states/ &emsp;&emsp; All state data returned

/states/?contig=true &emsp;&emsp; All state data for contiguous states (Not AK or HI)

/states/?contig=false &emsp;&emsp; All state data for non-contiguous states (AK, HI)

/states/:state &emsp;&emsp; All data for the state URL parameter

/states/:state/funfact &emsp;&emsp; A random fun fact for the state URL parameter

/states/:state/capital &emsp;&emsp; { ‘state’: stateName, ‘capital’: capitalName }

/states/:state/nickname &emsp;&emsp; { ‘state’: stateName, ‘nickname’: nickname }

/states/:state/population &emsp;&emsp; { ‘state’: stateName, ‘population’: population }

/states/:state/admission &emsp;&emsp; { ‘state’: stateName, ‘admitted’: admissionDate }

NOTES on GET routes:
1) If you have a catch all for routes that do not exist in your server, you will not need to check if
URL parameters exist. If they are entered wrong, the response will be a 404.
2) The :state URL parameter above represents state codes like KS, NE, TX, NY, etc. Entering in
full state names should result in a 404.
3) Check the example application to verify the exact responses expected.
4) Also check the example application for expected messages when required parameters are not
received or no fun facts are found for a requested state.
5) Notice contig above is a query parameter where :state is a URL parameter.
6) “All state data” means all state data from statesData.json merged with the fun facts stored in
MongoDB.
### Your REST API will provide responses to the following POST request:
Request: &emsp;&emsp; Response:

/states/:state/funfact &emsp;&emsp; The result received from MongoDB

Notes:
1) The body of this POST request should contain a “funfacts” property providing an array
providing one or more fun facts about the state. It should be possible to post all of your fun facts
about a state with one POST request.
2) If the state already has some fun facts saved, submitting a POST request should add to those
fun facts and not delete the pre-existing data.
3) We are not indexing fun facts or trying to determine if they already exist. Duplicate entries in the
funfacts array should be avoided but are possible.
### Your REST API will provide responses to the following PATCH request:
Request: &emsp;&emsp; Response (fields):

/states/:state/funfact &emsp;&emsp; The result received from MongoDB

Note:
1) The body of the PATCH submission MUST contain the index of the funfacts array element to
replace and the new fun fact. Required request body properties: index and funfact
2) The index parameter value should not be zero-based. This will allow you to check if the index is
sent: if (!index) etc. …afterwards, you should subtract 1 to adjust for the data array which is
zero-based.
### Your REST API will provide responses to the following DELETE request:
Request: &emsp;&emsp; Response (fields):

/states/:state/funfact &emsp;&emsp; The result received from MongoDB

Note:
1) The body of the DELETE submission MUST contain the index of the funfacts array element to
remove. Required request body property: index
2) The index parameter value should not be zero-based. This will allow you to check if the index is
sent: if (!index) etc. …afterwards, you should subtract 1 to adjust for the data array which is
zero-based.
