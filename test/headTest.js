const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head([5,6,7]), 5);//5
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");//"hello"
assertEqual(head([]));
assertEqual(head([2]), 2);