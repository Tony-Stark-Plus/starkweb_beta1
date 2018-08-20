<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/highlight.js/9.12.0/styles/qtcreator_dark.min.css" rel="stylesheet">
    <script src="/js/app.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
</head>
<body>
<pre>
<code class="javascript">
	onmessage = function(event) {
  importScripts('<>/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
</code>
</pre>
</body>
</html>