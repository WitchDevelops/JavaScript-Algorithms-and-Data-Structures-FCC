# About
It's a repo to store my coding exercises from JavaScript Algorithms and Data Structures certification from FreeCodeCamp. 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

## Observation: regex generator vs chatGPT

Regex generator is useful when you're dealing with a single pattern, for which you give a good, representative example. Not very useful when you have a more complex pattern with many optional elements.

E.g., for the [telephone number validator project](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator):
[regex generator tool](https://regex-generator.olafneumann.org/?sampleText=555-555-5555%20(555)555-5555%20(555)%20555-5555%20555%20555%205555%205555555555%201%20555%20555%205555&flags=i&selection=18%7CCombination%20%5BNumber%20%2B%20Character%5D,0%7CCombination%20%5BNumber%20%2B%20Character%5D)

On the other hand, you can prompt chatGPT with a very detailed verbal description of the pattern you want to match.

Again, for the [telephone number validator project](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator), I described the pattern I wanted to match:

![image](https://github.com/WitchDevelops/JavaScript-Algorithms-and-Data-Structures-FCC/assets/112077394/863fc818-fedf-4a2e-85ed-42284a3dea0e)

(where box represents a digit, blue is required, orange is optional). And chatGPT not only returned a regex, but also explained what each part does. It's pretty good at explaining code so I highly recommend it as a learning tool.
>
```js
/^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
```
>Explanation of the regex:
>
>`^`: Anchors the pattern to the start of the string.
>
>`(1\s?)?`: This part matches an optional "1" followed by an optional space. This allows for phone numbers with or without a "1" prefix.
>
>`(\(\d{3}\)|\d{3})`: This part matches either an area code enclosed in parentheses (e.g., "(555)") or just a three-digit area code (e.g., "555").
>
>`([\s-]?)`: This part matches an optional space or hyphen.
>
>`\d{3}`: Matches exactly three digits for the next part of the phone number.
>
>`([\s-]?)`: Matches an optional space or hyphen.
>
>`\d{4}`: Matches exactly four digits for the final part of the phone number.
>
>`$`: Anchors the pattern to the end of the string.
