import React from 'react';
import styles from "./faq.module.css"

const FAQ = () => {

  return (
    <div className={styles.container}>
      <h1>About Eth Wager</h1>

        <p>
          Eth Wager is a user-friendly platform that allows individuals to wager on the price action of large-cap NFT projects on the Ethereum blockchain.
          Users can easily explore the most popular Ethereum projects, betting on whether the project's price will increase or decrease over a set period of time. 
          If the user succeeds in their wager, they will be rewarded with a limited-value coin (WAGER) if their prediction is correct more days than not until the wager's expiration date!
        </p>
        
        <h2>Frequently Asked Questions</h2>

        <h3>How do I get started?</h3>
          <p>  
            To get started, you'll first create an account using your email and a secure password platform. After registering and logging in, you'll be able to wager on
            projects and view data regarding any of your active or expired wagers!
          </p>
 
        <h3>Bullish or Bearish?</h3>
          <p>
            You can choose to bet whether a chosen project's floor price will increase <b>(bullish)</b> or decrease <b>(bearish)</b> from the current floor price, over a set period of time, 
            either 15 or 30 days. If the user's price-action prediction is correct more days than not until the wager's expiration date, 
            they will be rewarded with WAGER coins.
          </p>

        <h3>Who's behind Eth Wager?</h3>
          <p>
          Hey there! My name is Mina Andrawis and I'm the creator of the Eth Wager platform. I'm based in Charleston, SC and this platform is something I'm really passionate about. I'm excited to be able to share it with you and the rest of the world!

          Feel free to visit my github page <a href="https://github.com/mina-andrawis" target="_blank" rel="noreferrer">here</a> to see more of my work!
          </p>      
    </div>
  )

}

export default FAQ;