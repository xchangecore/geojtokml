1. Install Node.js runtime on the server.
2. Do a "git clone " on the server to get the source code. 
3. Switch to the folder with the code.
4. Run the command "npm install" to install dependencies.
5. Execute the script "start.sh" 
6. The Node.js process will start listening on port 3000
7.  To change the port, edit the ".env" PORT property. 
8. To stop the process run the "stop.sh" script.
9. Once you have the node app running, update the "application.properties" of the Java web service. Change the "kml.service.url" to point to the correct domain name, or IP address. Also update port if you did #5 above. 