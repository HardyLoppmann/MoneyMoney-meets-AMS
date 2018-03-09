--
-- MIT License
--
-- Copyright (c) 2018 Andre Kemper
--
-- Permission is hereby granted, free of charge, to any person obtaining a copy
-- of this software and associated documentation files (the "Software"), to deal
-- in the Software without restriction, including without limitation the rights
-- to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
-- copies of the Software, and to permit persons to whom the Software is
-- furnished to do so, subject to the following conditions:
--
-- The above copyright notice and this permission notice shall be included in all
-- copies or substantial portions of the Software.
--
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-- SOFTWARE.

Exporter{	version			= 1.00,
			format			= MM.localizeText("AMS"),
			fileExtension	= "html",
			reverseOrder	= true,
			description		= MM.localizeText("Export to AMS")}

function WriteHeader (account, startDate, endDate, transactionCount)
	assert(io.write([[
	<!doctype html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>]] .. os.date("%d.%m.%Y", startDate) .. [[ - ]] .. os.date("%d.%m.%Y", endDate) .. [[</title>
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
	</head>
	<body>
		<div class="page-heading">
			<h1>]] .. os.date("%d.%m.%Y", startDate) .. [[ - ]] .. os.date("%d.%m.%Y", endDate) .. [[</h1>
		</div>
		<table class="table table-hover">
			<thead>
				<th class="lead">Kategorie</th>
				<th class="lead">BA</th>
				<th class="lead">Datum</th>
				<th class="lead">Buchung</th>
				<th class="text-right lead">Betrag</th>
				<th class="lead">Land</th>
			</thead>
			<tbody>
  ]]))

end

function WriteTransactions (account, transactions)
	for _,transaction in ipairs(transactions) do
		class = ""
		if transaction.amount > 0 then
			class="active"
		end
		if(transaction.accountNumber ~= nil and transaction.accountNumber:match('[A-Z][A-Z].') and not transaction.accountNumber:find('DE')) then
			assert(io.write([[
			<tr class="]] .. class .. [[">
				<td><input type="text" value="573" id="kategorie" name="kategorie"></td>
				<td><input type="text" value="]] .. ba(transaction.amount) .. [[" id="ba" name="ba"></td>
				<td>]] .. os.date("%d.%m.%Y", transaction.bookingDate) .. [[</td>
				<td><strong>]] .. transaction.name .. [[</strong><br>]] .. transaction.purpose .. [[</td>
				<td class="text-right">]] .. string.format("%.02f", transaction.amount) .. [[&nbsp;]] .. transaction.currency .. [[</td>
				<td>]] .. transaction.accountNumber:sub(0,2) .. [[</td>
			</tr>
			]]))
		end
	end
end

function WriteTail (account)
	assert(io.write([[</tbody></table>
	<script src="vendor/accounting.js" charset="utf-8" type="text/javascript"></script>
	<script src="exporter.js" charset="utf-8" type="text/javascript"></script></body></html>]]))
end

function ba(amount)
	if amount > 0 then
		return "1"
	else
		return "2"
	end
end
