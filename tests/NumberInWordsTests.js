require('should');

var NumberConverter = require('../NumberConverter');

var converter = new NumberConverter();

describe('Number In Words', function(){
  it('prints "one dollar"', function(){
    converter.print(1).should.equal('one dollar');
  });

  it('prints "two dollars"', function(){
    converter.print(2).should.equal('two dollars');
  });
 
  it('prints "ten dollars"', function(){
    converter.print(10).should.equal('ten dollars');
  });

  it('prints "fifteen dollars"', function(){
    converter.print(15).should.equal('ten dollars');
  });

  it('prints "twenty dollars"', function(){
    converter.print(20).should.equal('twenty dollars');
  });

  it('prints "twenty-six dollars"', function(){
    converter.print(26).should.equal('twenty-six dollars');
  });

  it('prints "thirty-eight dollars"', function(){
    converter.print(38).should.equal('thirty-eight dollars');
  });

  it('prints "fourty-three dollars"', function(){
    converter.print(43).should.equal('fourty-three dollars');
  });

  it('prints "one hundred dollars"', function(){
    converter.print(100).should.equal('one hundred dollars');
  });

  it('prints "one hundred and five dollars"', function(){
    converter.print(105).should.equal('one hundred and five dollars');
  });

  it('prints "one hundred and seventeen dollars"', function(){
    converter.print(117).should.equal('one hundred and seventeen dollars');
  });

  it('prints "seven hundred and fifty-eight dollars"', function(){
    converter.print(758).should.equal('seven hundred and fifty-eight dollars');
  });

  it('prints "one thousand dollars"', function(){
    converter.print(1000).should.equal('one thousand dollars');
  });

  it('prints "one thousand and four dollars"', function(){
    converter.print(1004).should.equal('one thousand and four dollars');
  });

  it('prints "one thousand and eighty-one dollars"', function(){
    converter.print(1081).should.equal('one thousand and eighty-one dollars');
  });

  it('prints "one thousand and nine hundred and ninety-nine dollars"', function(){
    converter.print(1999).should.equal('one thousand nine hundred and ninety-nine dollars');
  });

  it('prints "Number is too large"', function(){
    converter.print(2000).should.equal('Number is too large');
    converter.print(1000000).should.equal('Number is too large');
  });
  
});
