const fs = require('fs');
const util = require('util');
const stream = require('stream');
const program = require('commander');
const TransformStream = require("../CLI_Lab1/module/transformStream.js");
const pipeline = util.promisify(stream.pipline);

const actions = async () => {
    const {input, output, task} = program.opts();

    if (task !== 'task1.1' && task !== 'task1.2') {
        process.stderr.write(`Task must be "task1.1" or "task1.2"\n`);
        process.exit(1);
    }

    input === undefined && process.stdout.write('Enter the text and press ENTER to task1.1/task1.2 | press CTRL + C to exit: ')

    const ReadableStream =  Validator.isStr(input) && Validator.fileEx(input) ? fs.createReadStream(input) : process.stdin;
    const WriteableStream = Validator.isStr(output) && Validator.fileEx(output) ? fs.createWriteStream(output): process.stdout;

    try {
        if (Validator.fileEx(input) || Validator.fileEx(output) || input === undefined || output === undefined){
            await pipeline(
                ReadableStream,
                new TransformStream(task),
                WriteableStream
            )
        } else{
            process.stderr.write( `file does not exist!!!\n`);
            process.exit(2);
        }
    } catch (e) {
        process.stderr.write( `${e.message}\n`);
        process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
    .requiredOption('-t --task <task>', 'An task task1.1/task1.2')
    .option('-i, --input <filename>', 'An input file')
    .option('-o, --output <filename>', 'An output file')
    .action(actions)

program.parse(process.argv);