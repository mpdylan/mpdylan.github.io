	window.onload = function() {
		window.thepage = Raphael("testspace",600,800);
		var border = window.thepage.rect(5,5,590,790,15).attr({"stroke-width":3,stroke:"#000"});
		window.basefont = window.thepage.getFont("CompModern");
		window.the_text = window.thepage.set();
		window.current_line = 0;
		}


		//Functions to clear the screen
		function ClearParagraph(paragraph) {
			paragraph.forEach(function(word) {word.remove()});
			paragraph.clear();
		}

		function ClearText(text) {
			text.forEach(function(paragraph) {ClearParagraph(paragraph)});
			text.clear();
		}



		//The main drawing function. Iterates through a word list and places a text path and a bounding box.
		//Equips each word with the code to disappear.
		function draw_paragraph(wordlist)
		{
		
		var paragraph = thepage.set();
		
		var xposition = 60;

		for (var j = 0; j < wordlist.length; j++)
		{
			var thisword = thepage.set();
			
			thisword.push( thepage.print(10,11,wordlist[j],basefont,18).attr({"stroke-width":0,fill:"#000"}) );

			thisword.push( thepage.rect(thisword[0].getBBox().x - 3, 0,
					thisword[0].getBBox().width + 6, 20, 6).attr(
					{fill:"#fff",stroke:"#999","stroke-width":2,"fill-opacity":0,opacity:0}) );

			thisword.mouseover(function() {
				this.animate({opacity:1},250);
			});
			thisword.mouseout(function() {
				this.animate({opacity:0},250);
			});


			if (xposition + thisword[1].getBBox().width > 570)
				{
				xposition = 30;
				current_line += 1;
				}
			
				yposition = 40 + current_line*24;
				thisword.transform("t" + xposition + "," + yposition);
				xposition += thisword.getBBox().width;

//			var anim = Raphael.animation({fill:"#000"},300);
//			thisword[0].animate(anim.delay(20*j));
				 
			paragraph.push( thisword );


		}

		paragraph.forEach(
			function(word) {

			word.click(function() {
				setTimeout(function () {word.remove();},501);
				setTimeout(function () {paragraph.exclude(word);},501);
				word.animate({fill:"#fff",stroke:"#fff"},500);
			});
			}
		);
//		current_line += 1;
		return paragraph;

		}


		//Function to draw all the words. Split text input on newlines and call draw_paragraph on each piece.

		function DrawWords(text_input) {

		current_line = 0;

		ClearText(window.the_text);

		var the_paragraphs = text_input.split("\n");


		for (var j = 0; j < the_paragraphs.length; j++) {
			the_words = the_paragraphs[j].split(" ");
			new_paragraph = draw_paragraph(the_words);
			the_text.push(new_paragraph);
			current_line += 1;
		}

	}

		function JustifyParagraph(paragraph) {
		var current_x = 30;
		var current_y = paragraph[0][0].matrix.f;
		var animcount = 0;
		paragraph.forEach(
			function(word) {
				if (word[0].matrix.f == current_y) {
					if(Math.abs(word[0].matrix.e - current_x) > 3) {
						transformstring = "...t-" + (word[0].matrix.e - current_x) + ",0";
						anim = Raphael.animation({transform:transformstring},500,"<>");
						word.animate(anim.delay(animcount*25));
						animcount += 1;
//						word.transform("...t-" + (word[0].matrix.e - current_x) + ",0");
//						word.animate({"matrix.e": current_x},1000,"<>");
					}
					current_x += Math.round(word.getBBox().width);
				}
				else {
					current_y = word[0].matrix.f;
					current_x = 30;
					if(Math.abs(word[0].matrix.e - current_x) > 3) {
						transformstring = "...t-" + (word[0].matrix.e - current_x) + ",0";
						anim = Raphael.animation({transform:transformstring},500,"<>");
						word.animate(anim.delay(animcount*25));
						animcount += 1;
//						word.transform("...t-" + (word[0].matrix.e - current_x) + ",0");
//                                                word.animate({"matrix.e":30},1000,"<>");
					}
					Math.round(current_x += word.getBBox().width);
				}
			});
		}

		function JustifyText(the_text) {
		the_text.forEach(
			function(paragraph) {
			JustifyParagraph(paragraph);
			});
		}
