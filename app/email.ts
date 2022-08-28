import Imap, {Config as ImapConfig} from 'imap'
import {simpleParser, ParsedMail} from 'mailparser'

/* eslint-disable no-process-env */
const imapConfig: ImapConfig = {
  user: process.env.IMAP_USERNAME!,
  password: process.env.IMAP_PASSWORD!,
  host: process.env.IMAP_HOSTNAME,
  port: parseInt(process.env.IMAP_PORT!),
  tls: true,
}
/* eslint-enable no-process-env */

export const getInboxEmails = async(): Promise<ParsedMail[]> => {
  return new Promise((res, rej) => {
    const allParsedEmails: ParsedMail[] = []
    let numberOfMessagesToParse = 0
    let numberOfMessagesParsed = 0

    const imap = new Imap(imapConfig)
    imap.once('ready', () => {
      imap.openBox('INBOX', false, () => {
        imap.search(['ALL'], (err, results) => {
          const f = imap.fetch(results, {bodies: ''});
          f.on('message', msg => {
            console.log('got message')

            msg.on('body', stream => {
              console.log('got body')
              numberOfMessagesToParse += 1

              simpleParser(stream, (err, parsed) => {
                console.log('adding item')                

                allParsedEmails.push(parsed)                

                numberOfMessagesParsed += 1
                if (numberOfMessagesToParse == numberOfMessagesParsed) {
                  res(allParsedEmails)
                  imap.end();
                }
              });
            });
            // msg.once('attributes', attrs => {
            //   const {uid} = attrs;
            //   imap.addFlags(uid, ['\\Seen'], () => {
            //     // Mark the email as read after reading it
            //     console.log('Marked as read!');
            //   });
            // });
          });
          f.once('error', ex => {
            return Promise.reject(ex);
          });
          f.once('end', () => {
            console.log('Done fetching all messages!');

            //imap.end();
          });
        });
      });
    });

    imap.once('error', (err: unknown) => {
      console.log(err)
      
      rej(err)
    });

    imap.once('end', () => {
      console.log('Connection ended');

      res(allParsedEmails)
    });

    imap.connect();
  })  
}