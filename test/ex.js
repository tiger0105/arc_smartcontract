var a01 = artifacts.require('AGTUniv01');
// var a02 = artifacts.require('AGTUniv02');
// var a03 = artifacts.require('AGTUniv03');
// var a04 = artifacts.require('AGTUniv04');
// var a05 = artifacts.require('AGTUniv05');
// var a06 = artifacts.require('AGTUniv06');
var a07 = artifacts.require('AGTUniv07');
// var a08 = artifacts.require('AGTUniv08');
// var a09 = artifacts.require('AGTUniv09');
// var a10 = artifacts.require('AGTUniv10');
const truffleAssert = require('truffle-assertions');
module.exports = async function(callback) {
  console.log('Getting Gas Estimates');
  console.log('Deployed Gas A01:', a01.new.estimateGas());
  // console.log('Deployed Gas A02:', await a02.new.estimateGas());
  // console.log('Deployed Gas A03:', await a03.new.estimateGas());
  // console.log('Deployed Gas A04:', await a04.new.estimateGas());
  // console.log('Deployed Gas A05:', await a05.new.estimateGas());
  // console.log('Deployed Gas A06:', await a06.new.estimateGas());
  console.log('Deployed Gas A07:', await a07.new.estimateGas());
  // console.log('Deployed Gas A08:', await a08.new.estimateGas());
  // console.log('Deployed Gas A09:', await a09.new.estimateGas());
  // console.log('Deployed Gas A10:', await a10.new.estimateGas());
  
  callback();
};