import process from 'process';

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function testError(){
    throw new Error("Duar! ada Error");

}

testError();