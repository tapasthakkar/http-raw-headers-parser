# http-raw-headers-parser
​
Parse http rawHeaders to object without lowercase.
​
## Installation
​
```
npm install http-raw-headers-parser
```
​
## Example
​
**On proxy** 
When implementing a proxy server, all requests proxied will have their HTTP headers "lowercase", but you can keep it as it is by "hacking" the object on "getHeaders" method.
​
```javascript
const parseRawHeaders = require("http-raw-headers-parser")
var proxy = httpProxy.createProxyServer({ }); //...
​
proxy.on("proxyReq", function(proxyReq, req, res, options) 
{
    // Tampering the method "getHeaders"
    let originalHeaders = parseRawHeaders(req.rawHeaders)
    proxyReq.getHeaders () => originalHeaders;
});
```
​
## License
​
The MIT License (MIT)
​
Copyright &copy; 2021 Tapas Thakkar
​
Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:
​
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
​
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.