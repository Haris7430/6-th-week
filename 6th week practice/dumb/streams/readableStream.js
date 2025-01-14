

//// writable stream /// 

// const fs=require('fs');

// const writeStreame= fs.createWriteStream('writeStrm.txt');
// writeStreame.write('Hello, this is writable stream..')



/// readable streame ///

// const fs=require('fs');

// const readableStream= fs.createReadStream('writeStrm.txt');
// readableStream.on('data',(result)=>{
//     console.log('read stream: ',result.toString());
// })




/// duplex stream ///

// const {Duplex} =require('stream');
// const duplexStream= new Duplex({
//     read(size) {
//         this.push('Data from readable..');
//         this.push(null);
//     },
//     write(chunk,encoding,callback) {
//         console.log('writing:',chunk.toString());
//         callback();
//     }
// });
// duplexStream.write('Write this data');
// duplexStream.on('data',(chunk)=> console.log(chunk.toString()));




/// transform stream ///

const fs=require('fs');

const readableStream= fs.createReadStream('writeStrm.txt');
readableStream.on('data',(chunk)=>{
    console.log('Reading data: ',chunk.toString());
})

const {Transform}= require('stream');

const transformStream= new Transform({
    transform(chunk,encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});
readableStream.pipe(transformStream).pipe(process.stdout); 