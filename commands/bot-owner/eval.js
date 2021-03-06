const Discord = require('discord.js');
const Client = require('../../lib/client/Client');
const Command = require('../../lib/command/Command');

const Eval = new Command();

/**
 * @param {Client} bot 
 * @param {Discord.Message} msg 
 * @param {Array<String>} args 
 */
Eval.execute = async (bot, msg, args) => {
    try {
        const code = args.join(' ');
        let evaled = eval(code);
   
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        let clean_out = clean(evaled);

        if(clean_out.length < 1900) msg.channel.send(clean(evaled), { code: 'xl' });
        else throw new Error('Output is longer than 2000 characters.');
    } catch (err) {
        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

const clean = (text) => {
    if (typeof(text) === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    else return text;
}

Eval.setHelp({
    name: 'eval',
    args: '<expression>',
    aliases: [],
    description: 'evaluates given expression',
    permission: 'BOT_OWNER'
});

module.exports = Eval;