async function tagAllCommand(client, chatId, senderId) {
    try {
        const chat = await client.getChatById(chatId);
        
        if (!chat.isGroup) {
            await client.sendMessage(chatId, "This command only works in groups.");
            return;
        }

        // Check if sender is admin
        const participants = await chat.participants;
        const senderParticipant = participants.find(p => p.id._serialized === senderId);
        // const isSenderAdmin = senderParticipant && senderParticipant.isAdmin;

        if (true) { //isSenderAdmin
            if (!participants || participants.length === 0) {
                await client.sendMessage(chatId, "No participants found in the group.");
                return;
            }

            let mentionText = "ندااااء\n";
            let mentions = [];

            participants.forEach((participant) => {
                mentionText += `@${participant.id.user} `;
                mentions.push(participant.id._serialized);
            });

            await client.sendMessage(chatId, mentionText, { mentions });
        } else {
            await client.sendMessage(chatId, "منت ادمن هه");
        }
    } catch (error) {
        console.error('Error in tagAllCommand:', error);
        await client.sendMessage(chatId, "حدث خطأ");
    }
}

module.exports = tagAllCommand;