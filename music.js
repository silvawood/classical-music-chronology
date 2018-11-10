PLAYLIST = ["1712 Corelli: Concerto Grosso Op. 6 No. 8,7o6gRHY9wx4,2,20, The Baroque period introduced tonality, where melodic notes tug against an underlying tonal centre or key, expressing emotion through the varying degrees of tension (dissonance) and release (consonance)","1717 Handel: Water Music,r7Ki-lH2ZdE,14,34","1721 Bach: Brandenburg Concerto No. 3,pdsyNwUoON0,0,20","1725 Vivaldi: Four Seasons,Yu6Hr9kd-U0,5,50","1730 Bach: Chromatic Fantasy,SNWOhm5iXxs,218,245","1736 Pergolesi: Stabat Mater,y1QSbc-yMzM,84,107","1742 Bach: Goldberg Variations,ic3Flqa9wBo,286,328","1761 Haydn: Symphony 6,qwGQELUJnfs,3,35","1773 Mozart: Symphony 25,wVjh1YmlKYk,8,31","1785 Mozart: Dissonance Quartet,6Zcy-zs9jmw,21,39","1787 Mozart: Don Giovanni,rlIRBA_Qqjg,5,58","1798 Beethoven: Piano Sonata 5,CY_vmis5-kE,771,817","1804 Beethoven: Symphony 3,MC8LjoIaS4g,3067,3155","1808 Beethoven: Symphony 6,w53sagJ4FbQ,2095,2139",/*"1816 Beethoven: Symphony 7,wpnOQIUiwLk,988,1014",*/"1821 Beethoven: Piano Sonata 30,C8ayD3BjplY,511,556","1822 Schubert: 'Unfinished' Symphony,Ue76WS6YkOY,7,24","1824 Beethoven: Symphony 9,tuYtRA-TXas,2008,2046","1827 Beethoven: String Quartet 16,ikJBmhGIHY4,665,711","1830 Berlioz: Symphonie fantastique,g2Kky5BC9Uk,2812,2830","1835 Chopin: Nocturne Op.9 No.2,XMv53orNKnc,52,64","1837 Schumann: Fantasy Op.17,qbe32UvUS08,580,621","1842 Wagner: Rienzi,v22hyQhBD_M,87,152","1844 Chopin: Nocturne Op.55 No.1,E3qHO9aOQYM,216,230","1847 Wagner: Lohengrin,6Jggiq2uXu0,435,482","1849 Liszt: Dante Sonata,DjC11lCT7Ow,485,519","1859 Wagner: Tristan und  Isolde,UU4gOinhIn4,260,293","1877 Liszt: Les jeux d'eaux \u00E1 la Villa d'Este,3sShQSlFYNc,3,23","1887 Bruckner: Symphony 8,3LJ4i7P_kgQ,1176,1186","1894 Debussy: Pr\u00E9lude \u00E1 l'apr\u00E8s-midi d'un faune,CipRfYTwd0s,60,101","1899 Schoenberg: Verkl\u00E4rte Nacht,ZMLeRjUfIHQ,53,90","1903 Debussy: Estampes \"Jardins Sous la Pluie\",AXssC-jXS78,57,81","1906 Schoenberg: Chamber Symphony 1 Op. 9,37JV7Pdj-ic,813,833","1908 Schoenberg: String Quartet 2,oaMFQfVq_rE,1423,1489","1909 Schoenberg: Drei Klavierst\u00FCcke Op. 11 No. 1,zYaWND9n9h0,93,120","1909 Mahler: Symphony 9,9ALaAuK_FOo,4519,4576","1910 Mahler: Symphony 10,8PQT5IK8mwA,386,435","1912 Schoenberg: Pierrot lunaire,bd2cBUJmDr8,56,96","1913 Stravinsky: Le Sacre du Printemps,6F8qv0JBWkE,15,45","1923 Schoenberg: Suite for Piano Op.25,oaAbNgWqQI8,579,596","1927 Webern: String Trio Op.20,DsjB3AvcRC4,522,544","1936 Webern: Variations for piano Op. 27,iJfF1THDnuY,76,102","1940 Messiaen: Quartet for the End of Time,8bUzIif-xYc,5,25","1948 Boulez: Piano Sonata 2,ZbBRPOHTNLk,35,50","1948 Cage: Sonata V (from Sonatas and Interludes),jRHoKZRYBlY,23,35","1957 Stockhausen: Gruppen,-APpetBMXhA,109,131","1960 Stockhausen: Kontakte,KcMnlNrwYVE,56,80","1961 Ligeti: Atmosph\u00E8res,vOlXgCaKhIQ,27,70"];
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player = [];
var curr = 0;
var FADETIME = 20; // 20 ticks or 2s
var ticker;
var btnPause = document.getElementById("btnPause");
var forwards = true;

function onYouTubeIframeAPIReady() {
	player[0] = new YT.Player('player0', { events: {'onStateChange': onPlayer0StateChange, 'onError': function() { onError(0) }},	playerVars: { controls: 0 }	});
	player[1] = new YT.Player('player1', { events: {'onReady': onPlayer1Ready, 'onStateChange': onPlayer1StateChange, 'onError': function () { onError(1) }}, playerVars: { controls: 0 } });
	document.getElementById("btnPrev").onclick = gotoPrev;
	document.getElementById("btnNext").onclick = gotoNext;
	btnPause.onclick = pauseTrack;
}

function onPlayer1Ready(event) {
	player[1].track = -1;
	for (var i = 0; i < 2; i++) {
		player[i].paused = false;
		player[i].ticker = 0;
		player[i].setVolume(0);
		player[i].id = document.getElementById('wrapper' + i);
		player[i].infoId = document.getElementById('info' + i);
		loadNextVideo(i);
		//player[i].id.addEventListener("webkitfullscreenchange", onFullScreenChange);
	}
	var prefix;
	if (typeof document.hidden !== "undefined") prefix = "";
	else if (typeof document.mozHidden !== "undefined") prefix = "moz";
	else if (typeof document.msHidden !== "undefined") prefix = "ms";
	else if (typeof document.webkitHidden !== "undefined") prefix = "webkit";
	document.addEventListener(prefix + "visibilitychange", onVisibilityChange);
	document.hidden = document.hidden || document.mozHidden || document.msHidden || document.webkitHidden;
	curr = 0;
	player[0].playVideo();
	player[0].infoId.innerHTML = player[0].info;
	ticker = setInterval(tick, 100);
}

function onVisibilityChange() {
	if (document.hidden) {
		player[curr].paused = true;
		player[curr].pauseVideo();
		}
	else if (btnPause.innerHTML == 'Pause') {
		player[curr].paused = false;
		player[curr].playVideo();	
	}
}

function onPlayer0StateChange(event) {
	playerStateChange(0, event.data);
}

function onPlayer1StateChange(event) {
	playerStateChange(1, event.data);
}

function playerStateChange(i, state) {
	player[i].paused = (state == YT.PlayerState.BUFFERING || state == YT.PlayerState.PAUSED);
	//console.log('Player ' + i + ' paused = ' + player[i].paused);	
	if (!player[i].paused && curr != i) {
		player[i].paused = true;
		player[i].pauseVideo(); //pause player to stop just loaded video
		}
}

function tick() {
	for (var i = 0; i < 2; i++) {
		if (!player[i].paused) {
			player[i].ticker++;
			if (i == curr) {
				if (player[i].ticker <= FADETIME)// fade in
					player[i].setVolume(100 * player[i].ticker / FADETIME);
				else if (player[i].ticker == player[i].end - FADETIME) { // play next video and change players
					//console.log('Changing players');
					curr = 1 - i;
					player[curr].ticker = 0;
					player[curr].playVideo();
					player[curr].id.style.opacity = '1';
					player[1-curr].id.style.opacity = '0';
					player[curr].infoId.innerHTML = player[curr].info;
					if (curr == 1) player[0].infoId.innerHTML = ''; // remove link that is on top of player[1] link, so it does not receive user click
					}
				}
			else if (player[i].ticker > player[i].end - FADETIME) { //fade out
				player[i].setVolume(100 * (player[i].end - player[i].ticker) / FADETIME);
				if (player[i].ticker == player[i].end) {
					player[i].ticker = 0;
					loadNextVideo(i);
					}
				}
			}
		}
}

function loadNextVideo(i) {
	if (forwards) {	
		if (player[1-i].track < PLAYLIST.length - 1)
			player[i].track = player[1-i].track + 1;
		else {
			forwards = false;
			player[i].track = PLAYLIST.length - 2;
			}
		}
	else if (player[1-i].track > 0)
		player[i].track = player[1-i].track - 1;
	else
		{
		forwards = true;
		player[i].track = 1;
		}
	loadVideo(i);
}

function onError(i) {
	PLAYLIST.splice(i,1);
	loadVideo(i);
}

function loadVideo(i) {
	var videoArray = PLAYLIST[player[i].track].split(',');
	console.log(PLAYLIST[player[i].track]);
	player[i].loadVideoByUrl({mediaContentUrl: 'http://www.youtube.com/v/' + videoArray[1], startSeconds: videoArray[2], suggestedQuality: 'default'});
	player[i].end = 10 * (videoArray[3] - videoArray[2]);
	player[i].info = "<a href='https://www.youtube.com/watch?v=" + videoArray[1] + "' target='_blank'>" + videoArray[0] + "</a>";
}

function gotoPrev() {
	if (player[curr].track > 0) {
		player[curr].track--;
		loadTracks();
	}
}

function gotoNext() {
	if (player[curr].track < PLAYLIST.length -1) {
		player[curr].track++;
		loadTracks();
	}
}

function loadTracks() {
	player[curr].ticker = 0;
	player[curr].setVolume(0);
	loadVideo(curr);
	player[curr].infoId.innerHTML = player[curr].info;
	player[1-curr].ticker = 0;
	player[1-curr].setVolume(0);
	loadNextVideo(1-curr);
}

function pauseTrack() {
	if (btnPause.innerHTML == 'Pause') {
		btnPause.innerHTML = 'Play';
		player[curr].pauseVideo();
		player[curr].paused = true;
		}
	else {
		btnPause.innerHTML = 'Pause';
		player[curr].playVideo();
		player[curr].paused = false;
	}
}