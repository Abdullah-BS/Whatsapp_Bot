async function tagHidden(client, chatId, senderId) {
    try {
        const chat = await client.getChatById(chatId);
        
        if (!chat.isGroup) {
            await client.sendMessage(chatId, "This command only works in groups.");
            return;
        }

        // Check if sender is admin
        const participants = await chat.participants;
        const senderParticipant = participants.find(p => p.id._serialized === senderId);
        const isSenderAdmin = senderParticipant && senderParticipant.isAdmin;

        if (isSenderAdmin || senderId === my_senderId) {
            if (!participants || participants.length === 0) {
                await client.sendMessage(chatId, "No participants found.");
                return;
            }

            // Create invisible mentions - the magic happens here!
            const mentionText = "📣📣 "; // Your message text without numbers
            const mentions = participants.map(p => p.id._serialized);

            // This will tag everyone but only show your custom text
            await client.sendMessage(chatId, mentionText, { mentions });
            
        } else {
            await client.sendMessage(chatId, "منت ادمن ههه");
        }
    } catch (error) {
        console.error('Error in tagAllCommand:', error);
        // Fallback: send simple message with @everyone text
        // await client.sendMessage(chatId, "📢 @everyone");
    }
}

module.exports = tagHidden;