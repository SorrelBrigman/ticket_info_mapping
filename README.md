# ticket_info_mapping
Creating a program that could parse ticket information into a consistent format.

Created out of the 2017 Nashville Music Hackathon

One of the presentations at the Nashville Music Hackathon was on anti-scalper technology being used to find ticket purchases that were made by known scalpers, and cancel their purchases to put tickets back in the hands of the fans.

Their system involved getting XL sheets from each venue
  Manually looking at through each XL sheet to look for scalper patterns
  Taking the questionable looking consumers and putting those names into their technology that tests those names against known scalpers.

The lack of automation in the process (the manually looking at each XL sheet) is due to the fact that each venue sends over ticket informatoin in a different format

We wanted to find a way to automate this process as much as possible, to allow faster sorting of the data.

To do this there were several steps:

Convert each XL doc into a JSON file for easier javascript manipulation

Map the values of the current XL file to a new database with the values needed in the anti-scaper tech.

Create a user interface that would allow them to easly:

  upload an XL file
  map the values in the XL file to the values in the system
  have feedback for a user to know a database has been successfully created.
