<!-- Project Comments Go Here -->

## Summary of what was done :technologist::

1. Re-organised the file directories (i.e. created components folder and moved css files to css folder)
2. Removed the border line for the far right cell of the application component
3. Fixed date and loan amount format bug
4. Added the button to cycle through the various pages of data:

- Originally decided to loop back to the first page of data when the user gets to the last page, however, I realised that this may be misleading to the user who may mistakenly believe that after the last page of data, the first page of data is new data
- To solve this, I could either add some pagination UI to show which page the user is on or I could disable the button once the user reaches the last page, the latter of which is ultimately the solution I went for as I believe that this is clearer to the user

5. Added basic test and drafted out some ideas of other tests to run given more time
6. Added basic mobile responsive design to main Application Portal page
7. Created Modal to open on click of each application component and fetch the relevant user loan information and closes on clicking overlay/cross in the corner of the Modal

## To do with more time :stopwatch::

### General:

- Add some logic to apply a comma separator per £1000
- Complete testing

### Modal:

- Fix some of the styling to more closely match the design (i.e. table/list of loan history to stretch to the end of the modal, headers of the list to align with the other headers above it, resize fonts, add internal vertical scroll to table/list only)
- Make modal mobile responsive
