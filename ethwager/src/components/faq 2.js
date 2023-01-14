import React from 'react';
import "../styles/faq.css"

const FAQ = () => {

  return (
    <div className="container">
      <h1>About Eth Wager</h1>

        <h2>Frequently Asked Questions</h2>

        <h3>What is Eth Wager?</h3>
          <p>
            Eth Wager is a platform that allows individuals to wager on the price action of large-cap NFT projects on the Ethereum blockchain. 
            Users can choose to bet on whether the project's price will increase or decrease over a set period of time, 
            and will be rewarded with a limited-value coin (WAGER) if their prediction is correct more days than not until the wager's expiration date.
          </p>
        
        <h3>How does Eth Wager work?</h3>
          <p>
            To use Eth Wager, users must first connect their MetaMask wallet and create an account with an email address and password. 
            Once logged in, users can browse the top 10 most popular Ethereum NFT projects on OpenSea and select a project to wager on. 
            Users can then choose to bet on whether the project's price will increase (bullish) or decrease (bearish) over a set period of time, 
            ranging from 15 to 30 days. If the user's price-action prediction is correct more days than not until the wager's expiration date, 
            they will be rewarded with WAGER coins.
          </p>

        <h3>Is Eth Wager a gambling platform?</h3>
        <p>
          Eth Wager is not a traditional gambling platform, as it does not allow users to bet real money or other valuable assets. 
          Instead, users are rewarded with a limited-value coin (WAGER) for correctly predicting the price action of NFT projects over a set period of time. 
          However, users should be aware that the value of WAGER coins may fluctuate and may not have any real-world value outside of the Eth Wager platform.
        </p>

        <h3>Is it possible to cheat on Eth Wager?</h3>
          <p>
            Eth Wager has implemented several measures to discourage bad actors from attempting to manipulate the system or game the platform. 
            By requiring users to make a prediction over a set period of time, Eth Wager aims to limit the potential for users to manipulate the price of NFT projects by 
            significantly dropping the floor price. Additionally, the platform uses a SQL database to track user activity and wager data, and has measures in place 
            to detect and prevent fraudulent activity.
          </p>      
    </div>
  )

}

export default FAQ;