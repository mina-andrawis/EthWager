import React from 'react';
import "../styles/faq.css"

const FAQ = () => {

  return (
    <div className="container">
      <h1>About Eth Wager</h1>

        <h2>Frequently Asked Questions</h2>

        <h3>What is Eth Wager?</h3>
          <p>
            Eth Wager aims to be a user-friendly platform that allows individuals to wager on the price action of large-cap NFT projects on the Ethereum blockchain.
            Users can easily explore the most popular Ethereum projects, betting on whether the project's price will increase or decrease over a set period of time. 
            If the user succeeds in their wager, they will be rewarded with a limited-value coin (WAGER) if their prediction is correct more days than not until the wager's expiration date!
          </p>
        
        <h3>How do I get started?</h3>
          <p>  
            To get started, users must first create an account on the Eth Wager platform. After registering, users must log into their account to wager on
            projects and view data regarding any active or expired wagers. Users are only required to log in once, as this data is stored in local memory, for
            the sake of convenience. Once you have logged into your account, you can begin making wagers on your favorite NFT projects!
          </p>
 
        <h3>Bullish or Bearish</h3>
          <p>
            Users can choose to bet on whether a chosen project's floor price will increase <b>(bullish)</b> or decrease <b>(bearish)</b> from the current floor price, over a set period of time. 
            ranging from 15 to 30 days. If the user's price-action prediction is correct more days than not until the wager's expiration date, 
            they will be rewarded with WAGER coins.
          </p>

        <h3>Is it possible to cheat on Eth Wager?</h3>
          <p>
            Eth Wager has implemented several measures to discourage bad actors from attempting to manipulate the system or game the platform. 
            By requiring users to make a prediction over a set period of time, Eth Wager aims to limit the potential for users to manipulate the price of NFT projects by 
            significantly dropping the floor price. Though with enough time and effort, it is possible for a user to manipulate the price of an NFT project, there isn't much
            point since the rewarded token (WAGER) has no real-world value outside of the Eth Wager platform.
          </p>      
    </div>
  )

}

export default FAQ;