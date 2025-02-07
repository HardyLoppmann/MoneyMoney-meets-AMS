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
			fileExtension	= "csv",
			reverseOrder	= true,
			description		= MM.localizeText("Export to AMS")}

function WriteHeader (account, startDate, endDate, transactionCount)
	-- Keine Header für CSV notwendig
end

function WriteTransactions (account, transactions)
	for _,transaction in ipairs(transactions) do
		-- Prüfe ob Auslandstransaktion und Betrag > 50000
		if transaction.accountNumber ~= nil 
		   and transaction.accountNumber:match('[A-Z][A-Z].')
		   and not transaction.accountNumber:find('DE')
		   and math.abs(transaction.amount) > 50000 then
			
			local country = transaction.accountNumber:sub(0,2)
			-- Runde auf Tausender (teile durch 1000 und runde auf ganze Zahlen)
			local roundedAmount = math.floor(math.abs(transaction.amount) / 1000)
			local baValue = ba(transaction.amount)
			
			-- Schreibe CSV-Zeile im Format: "2;573;EDV-Dienstleistungen;CH;137"
			assert(io.write(string.format("%s;573;EDV-Dienstleistungen;%s;%d\n",
				baValue,
				country,
				roundedAmount)))
		end
	end
end

function WriteTail (account)
	-- Keine Footer für CSV notwendig
end

function ba(amount)
	if amount > 0 then
		return "1"
	else
		return "2"
	end
end
