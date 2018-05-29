# UWKirio

This is the Client-Server Application code for UWKirio ([a UW and Kirio Smart Home capstone collaboration](https://www.mykirio.com/)) which uses [socket.io](https://socket.io/) to get and display real-time changes from Modbus, which transmits sensor information between Transport and Application layers over UDP.

The AWS EC2 instance has an IPv4 public DNS. If needed, it looks like there is [IPv6 Support for EC2 Instances in Virtual Private Clouds](https://aws.amazon.com/blogs/aws/new-ipv6-support-for-ec2-instances-in-virtual-private-clouds/).

# Instructions

## To see the application

1. Go to http://ec2-18-236-74-182.us-west-2.compute.amazonaws.com:8080/

## To update the application:

1. `git clone https://github.com/KathrynBrusewitz/uwkirio.git` 

2. `cd uwkirio` then run `npm install`. If you don't have the command `npm`, you need to install it. Follow these instructions:
  - First, install `nvm`. Do this by running `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
  - Next, install `node`. Do this by running `nvm install node`
  - That's it. `node` already has `npm` included. Now just run `npm install` so it can install all the dependencies for the project.

3. Make your changes in `index.js` and `index.html`. You can see your changes by running the application locally. To do this, be inside the project root and run `npm start`. It will be live at `http://localhost:8080/`.

## To push changes to the server:

1. Go to https://aws.amazon.com/

2. Click `Sign in to Console`

3. Click EC2

4. In EC2 Dashboard, click `Running Instances`

5. With your one instance selected, click `Connect`

6. Follow the instructions in the pop-up. I already gave you the `.pem` file you need to `ssh` into the EC2 instance. In terminal, go to the folder where your `.pem` file is.

6. Then, copy the `ssh` command under "Example" and paste it in terminal.

7. Now you should be logged into the EC2 instance. Run `ls` to see the `uwkirio` folder. This is the github repository.

8. Go into `uwkirio` and run `git pull` to pull the latest changes.

9. You will need to rerun the `forever` script which is running the project forever on the server. To do this, just run `forever stopall` and then `forever start index.js`. 

10. Now you can exit terminal.

# Resources

The code was forked from a very simple chat example used for the [Getting Started](http://socket.io/get-started/chat/) guide of the Socket.IO website.

You can spin up a free Heroku dyno to test out their chat example:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/socketio/chat-example)
