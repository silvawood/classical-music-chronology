PLAYLIST="1712 Corelli: Concerto Grosso Op. 6 No. 8,7o6gRHY9wx4,2,20, The Baroque period introduced tonality, where notes and chords, where melodic notes tug against an underlying tonal centre or key, expressing emotion through the varying degrees of tension (dissonance) and release (consonance);1717 Handel: Water Music,r7Ki-lH2ZdE,14,34;1721 Bach: Brandenburg Concerto No. 3,pdsyNwUoON0,0,20;1725 Vivaldi: Four Seasons,Yu6Hr9kd-U0,5,50;1730 Bach: Chromatic Fantasy,SNWOhm5iXxs,218,245;1736 Pergolesi: Stabat Mater,0qX_K6WzkII,84,107;1742 Bach: Goldberg Variations,ic3Flqa9wBo,286,328;1761 Haydn: Symphony 6,qwGQELUJnfs,3,35;1773 Mozart: Symphony 25,wVjh1YmlKYk,8,31;1785 Mozart: Dissonance Quartet,6Zcy-zs9jmw,21,39;1787 Mozart: Don Giovanni,rlIRBA_Qqjg,5,58;1798 Beethoven: Piano Sonata 5,CY_vmis5-kE,771,817;1804 Beethoven: Symphony 3,MC8LjoIaS4g,3067,3155;1808 Beethoven: Symphony 6,w53sagJ4FbQ,2095,2139;1821 Beethoven: Piano Sonata 30,C8ayD3BjplY,511,556;1822 Schubert: 'Unfinished' Symphony,Ue76WS6YkOY,7,24;1824 Beethoven: Symphony 9,tuYtRA-TXas,2008,2046;1827 Beethoven: String Quartet 16,ikJBmhGIHY4,665,711;1830 Berlioz: Symphonie fantastique,g2Kky5BC9Uk,2812,2830;1835 Chopin: Nocturne Op.9 No.2,XMv53orNKnc,52,64;1837 Schumann: Fantasy Op.17,qbe32UvUS08,580,621;1842 Wagner: Rienzi,v22hyQhBD_M,87,152;1844 Chopin: Nocturne Op.55 No.1,E3qHO9aOQYM,216,230;1847 Wagner: Lohengrin,6Jggiq2uXu0,435,482;1849 Liszt: Dante Sonata,DjC11lCT7Ow,485,519;1859 Wagner: Tristan und  Isolde,UU4gOinhIn4,260,293;1877 Liszt: Les jeux d'eaux \u00e1 la Villa d'Este,3sShQSlFYNc,3,23;1887 Bruckner: Symphony 8,3LJ4i7P_kgQ,1176,1186;1894 Debussy: Pr\u00e9lude \u00e1 l'apr\u00e8s-midi d'un faune,CipRfYTwd0s,60,101;1899 Schoenberg: Verkl\u00e4rte Nacht,ZMLeRjUfIHQ,53,90;1903 Debussy: Estampes \"Jardins Sous la Pluie\",AXssC-jXS78,57,81;1906 Schoenberg: Chamber Symphony 1 Op. 9,37JV7Pdj-ic,813,833;1908 Schoenberg: String Quartet 2,oaMFQfVq_rE,1423,1489;1909 Schoenberg: Drei Klavierst\u00fccke Op. 11 No. 1,zYaWND9n9h0,93,120;1909 Mahler: Symphony 9,9ALaAuK_FOo,4519,4576;1910 Mahler: Symphony 10,8PQT5IK8mwA,386,435;1912 Schoenberg: Pierrot lunaire,bd2cBUJmDr8,56,96;1913 Stravinsky: Le Sacre du Printemps,6F8qv0JBWkE,15,45;1923 Schoenberg: Suite for Piano Op.25,oaAbNgWqQI8,579,596;1927 Webern: String Trio Op.20,DsjB3AvcRC4,522,544;1936 Webern: Variations for piano Op. 27,iJfF1THDnuY,76,102;1940 Messiaen: Quartet for the End of Time,8bUzIif-xYc,5,25;1948 Boulez: Piano Sonata 2,ZbBRPOHTNLk,35,50;1948 Cage: Sonata V (from Sonatas and Interludes),jRHoKZRYBlY,23,35;1957 Stockhausen: Gruppen,-APpetBMXhA,109,131;1960 Stockhausen: Kontakte,KcMnlNrwYVE,56,80;1961 Ligeti: Atmosph\u00e8res,vOlXgCaKhIQ,27,70".split(";");
var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player=[],curr=0,FADETIME=20,ticker,btnPause=document.getElementById("btnPause"),forwards=!0;
function onYouTubeIframeAPIReady(){player[0]=new YT.Player("player0",{events:{onStateChange:onPlayer0StateChange,onError:function(){onError(0)}},playerVars:{controls:0}});player[1]=new YT.Player("player1",{events:{onReady:onPlayer1Ready,onStateChange:onPlayer1StateChange,onError:function(){onError(1)}},playerVars:{controls:0}});document.getElementById("btnPrev").onclick=gotoPrev;document.getElementById("btnNext").onclick=gotoNext;btnPause.onclick=pauseTrack}
function onPlayer1Ready(a){player[1].track=-1;for(a=0;2>a;a++)player[a].paused=!1,player[a].ticker=0,player[a].setVolume(0),player[a].id=document.getElementById("wrapper"+a),player[a].infoId=document.getElementById("info"+a),loadNextVideo(a);var b;"undefined"!==typeof document.hidden?b="":"undefined"!==typeof document.mozHidden?b="moz":"undefined"!==typeof document.msHidden?b="ms":"undefined"!==typeof document.webkitHidden&&(b="webkit");document.addEventListener(b+"visibilitychange",onVisibilityChange);
document.hidden=document.hidden||document.mozHidden||document.msHidden||document.webkitHidden;curr=0;player[0].playVideo();player[0].infoId.innerHTML=player[0].info;ticker=setInterval(tick,100)}function onVisibilityChange(){document.hidden?(player[curr].paused=!0,player[curr].pauseVideo()):"Pause"==btnPause.innerHTML&&(player[curr].paused=!1,player[curr].playVideo())}function onPlayer0StateChange(a){playerStateChange(0,a.data)}function onPlayer1StateChange(a){playerStateChange(1,a.data)}
function playerStateChange(a,b){player[a].paused=b==YT.PlayerState.BUFFERING||b==YT.PlayerState.PAUSED;player[a].paused||curr==a||(player[a].paused=!0,player[a].pauseVideo())}
function tick(){for(var a=0;2>a;a++)player[a].paused||(player[a].ticker++,a==curr?player[a].ticker<=FADETIME?player[a].setVolume(100*player[a].ticker/FADETIME):player[a].ticker==player[a].end-FADETIME&&(curr=1-a,player[curr].ticker=0,player[curr].playVideo(),player[curr].id.style.opacity="1",player[1-curr].id.style.opacity="0",player[curr].infoId.innerHTML=player[curr].info,1==curr&&(player[0].infoId.innerHTML="")):player[a].ticker>player[a].end-FADETIME&&(player[a].setVolume(100*(player[a].end-player[a].ticker)/
FADETIME),player[a].ticker==player[a].end&&(player[a].ticker=0,loadNextVideo(a))))}function loadNextVideo(a){forwards?player[1-a].track<PLAYLIST.length-1?player[a].track=player[1-a].track+1:(forwards=!1,player[a].track=PLAYLIST.length-2):0<player[1-a].track?player[a].track=player[1-a].track-1:(forwards=!0,player[a].track=1);loadVideo(a)}function onError(a){PLAYLIST.splice(a,1);loadVideo(a)}
function loadVideo(a){var b=PLAYLIST[player[a].track].split(",");console.log(PLAYLIST[player[a].track]);player[a].loadVideoByUrl({mediaContentUrl:"http://www.youtube.com/v/"+b[1],startSeconds:b[2],suggestedQuality:"default"});player[a].end=10*(b[3]-b[2]);player[a].info="<a href='https://www.youtube.com/watch?v="+b[1]+"' target='_blank'>"+b[0]+"</a>"}function gotoPrev(){0<player[curr].track&&(player[curr].track--,loadTracks())}
function gotoNext(){player[curr].track<PLAYLIST.length-1&&(player[curr].track++,loadTracks())}function loadTracks(){player[curr].ticker=0;player[curr].setVolume(0);loadVideo(curr);player[curr].infoId.innerHTML=player[curr].info;player[1-curr].ticker=0;player[1-curr].setVolume(0);loadNextVideo(1-curr)}
function pauseTrack(){"Pause"==btnPause.innerHTML?(btnPause.innerHTML="Play",player[curr].pauseVideo(),player[curr].paused=!0):(btnPause.innerHTML="Pause",player[curr].playVideo(),player[curr].paused=!1)};