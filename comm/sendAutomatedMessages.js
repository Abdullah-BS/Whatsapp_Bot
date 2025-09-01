async function sendAutomatedMessages(client, groupID) {
    try {
        console.log('Sending automated messages to group:', groupID);
        
        // First message
        await client.sendMessage(groupID, "This is an automated message (Test 1)");
        console.log('First automated message sent');
        
        // Wait 30 seconds
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Second message
        await client.sendMessage(groupID, "This is an automated message (Test 2)");
        console.log('Second automated message sent');

        // Wait 30 seconds
        await new Promise(resolve => setTimeout(resolve, 30000));

        // Third message
        await client.sendMessage(groupID, "Test Completed. Well Done!");
        console.log('Third automated message sent');

        
    } catch (error) {
        console.error('Error sending automated messages:', error);
    }
}

module.exports = sendAutomatedMessages;