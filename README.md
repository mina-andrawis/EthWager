# EthWager

Eth Wager aims to be a platform that allows individuals to wager whether or not a large cap nft project will increase or decrease in price. I aim to rewarding members with an coin (WAGER), which I have created. This coin will have very limited value and will not incentivize users to drop the floor price below the fair market value.

I have wanted to create this project for several months and I aim to challenge myself with this application. As the platformed is developed, buy-ins may be introduced and more precise reward distribution may be necessary. For the time being, the application will be a user-friendly website that allows individuals to browse large-cap NFTs and receive my coin as a reward for being correct.

The main mechanism of this project is for a user to choose a date for their wager to expire, which will determine if they are in the money or out of the money. If the user’s price-action prediction is correct more days than not until that day, they will be rewarded. This limits bad actors dropping the floor price by a tremendous value, even if it is picked up immediately due to adequate demand. This will limit the likelihood of gaming the system.


Requirements V1
* Project consists of a single page application with different subgrids
* Tabs include: Home, My Account, Developed by Mina (link github)
* Create a homepage with a scrollable grid that allows users to browse the top 10 most popular etherium nft projects on OpenSea
* Grid will show project name, current floor price,total volume,  age of project, and whether it has gone up or down in the last 30 days
* Allow users to click each gridbox and open a new page that allows them to choose the following:
* Bullish or bearish ?
* When shall this wager expire? 15 days? 30 days?
* Explanation of system
* Allow user to connect metamask wallet, for reward deposit
* Account page will have all active wagers and expired wagers with relevant information
* Active Wagers:
* Days in the money vs out of the money
* Days left in wager
* Account creation will require email address and password, will be associated with a metamask wallet
* Stored in sql database
* Email will be Ssent out when a wager expires
