# emailaio
AIO Web Tool for interacting, sorting &amp; checking Email:Password Lists

Released Jan 2025 by LeakGate

This code base enables the following:

- Text Input Field that only allows lines containing text matching the following [EMAIL:PASS] template. [remove any lines not matching format, remove any blank emails/passwords]
- Check for duplicate complete lines. Move these into their own non editable textarea.
- Check for duplicate email entries. Move these into their own non editable textarea.
- Check for duplicate password entries. Move these into their own non editable textarea.
- Check for short passwords (<4 characters). Move these into their own non editable textarea.
- The combos left are 100% unique entries. Next we will take these combos and:
- Sort A-Z 0-9 (with options to: Reverse Sort, Smallest First, Biggest First, Random Sort)
- Create a text area containing all the sorted unique valid combos!
- Have a current unique line count displayed.
- Have an original line count displayed.
- Display total trash lines removed total.
- Display total time in seconds to the .0000000000 ms time
- Display a copy all button with each textarea for easy access.
- Display a sort by email domain button which would take the unique lines and sort them according to “@DOMAIN” part of the Email. Then display a button with each @domain in the list, when its clicked a text area appears displaying all lines with that domain.

