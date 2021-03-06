"use strict";

module.exports = function parseRawHeaders(rawHeaders)
{
    var headersObject = {};
    var iterator = createIterator(rawHeaders);

    var headerIteration = iterator.next();
    while (!headerIteration.done)
    {
        let header = headerIteration.value;
        if (headersObject[header.name])
        {
            headersObject[header.name] += `, ${header.value}`;
        }
        else
        {
            headersObject[header.name] = header.value;
        }
        headerIteration = iterator.next();
    }

    return headersObject;
}

function* createIterator(arr)
{
    var i = 0;
    while (i < arr.length)
    {
        if (yield { name: arr[i++], value: arr[i++] })
        {
            i = 0;
        }
    }
}
