var express = require('express');
var app = express();
var dns = require('dns');
var util = require('util');
var _ = require('underscore');
var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

var upstreamServer = { address: '8.8.8.8', port: 53, type: 'udp' };
var timeout = 1000;

app.get('/dns/:method/:domain/:type', function (req, res) {
	console.log('request',req.headers);
	remoteIp = req.headers['x-remotebackend-real-remote'];

	// Get the category of the domain name
	client.smembers(req.params.domain + ':category', function (err, domainCategories) {
		replies.forEach(function (reply, i) {
			client.ismember('ip:' + remoteIp + ':category', category, function (err, isMember) {
				console.log('Found category!');
			});
		}
	});

	// Get the allowed categories of the ip

	// Check if they match

	// No match set 404
	res.sendStatus(404);

	/*if (req.params.method === 'lookup') {
		console.log(req.params);
		if (req.params.type === 'ANY') return;
		dns.resolve(req.params.domain, req.params.type, function(err, address) {
			console.log(address);
			if (req.params.type === 'SOA') {
				var dnsReply = {qtype:req.params.type,qname:req.params.domain,content: address.nsname + ". " + address.hostmaster + ". " + address.serial + " " + address.refresh + " " + address.retry + " " + address.expire + " " + address.minttl,ttl:address.minttl};
				console.log(dnsReply);
				res.json({result: [dnsReply]});
			} else {
			}
		});
	} else {

	}*/
});

app.listen(5353, function () {
  console.log('Example app listening on port 5353');
});
