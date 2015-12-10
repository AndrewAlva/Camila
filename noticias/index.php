
<html class="no-js" lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>NOTICIAS | Camila Fernández</title>
        <link rel="icon" 
        type="image/png" 
        href="../img/web/favicon.png">
        <meta name="description" content="Genuina con la música, como el oxígeno que respira desde que nació Camila Fernández sale al mundo a compartir lo que siente a través de su voz. Nacida en Guadalajara, Jalisco, en 1997, siempre ha estado rodeada de música, tanto por ser hija de Alejandro Fernández y nieta de Vicente Fernández, como por elección propia. Simple y sencillamente le encanta. De la música se nutre y a través de ésta se expresa, tan es así que cantando es como se ha ido abriendo camino en este mundo.">

        <meta property="fb:admins" content="100004419218412" />
        <meta property="fb:app_id" content="543027962529118" />
        
        <meta property="og:title" content="Camila Fernández Oficial" />
        <meta property="og:site_name" content="Camila Fernández Oficial"/>
        <meta property="og:url" content="http://camilafernandez.com.mx/noticias" />
        <meta property="og:description" content="Genuina con la música, como el oxígeno que respira desde que nació Camila Fernández sale al mundo a compartir lo que siente a través de su voz. Nacida en Guadalajara, Jalisco, en 1997, siempre ha estado rodeada de música, tanto por ser hija de Alejandro Fernández y nieta de Vicente Fernández, como por elección propia. Simple y sencillamente le encanta. De la música se nutre y a través de ésta se expresa, tan es así que cantando es como se ha ido abriendo camino en este mundo." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:image" content="http://camilafernandez.com.mx/img/web/camila-share.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
        <link rel="apple-touch-icon" href="img/web/favicon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="../css/normalize.css">
        <link rel="stylesheet" href="../css/main.css">
        <script src="../js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body id="newsBodyTag">
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '543027962529118',
              xfbml      : true,
              version    : 'v2.5'
            });
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        </script>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="newsFullWrapper" class="easeInOut crystal">
            
            <div id="newsNav" class="easeInOut">
                <div id="newsLogo">
                    <div id="newsBurguerIcon" class="burguerIcon onlyMob">
                        <li class="burguerLines easeInOut"></li>
                        <li class="burguerLines easeInOut"></li>
                        <li class="burguerLines easeInOut"></li>
                    </div>

                    <a href="../">
                        <img src="../img/brand/camila-logo-b.svg" alt="Camila Fernández Oficial">
                    </a>
                </div>
                <div id="newsList">
                    <a href="?page=1">
                        <li class="easeInOut">
                            <h2>Camila Fernández firma contrato con Universal Music </h2>
                            <p>Noviembre 30, 2015</p>
                        </li>
                    </a>

                    <a href="?page=2">
                        <li class="easeInOut">
                            <h2>Próximamente</h2>
                            <p>//</p>
                        </li>
                    </a>

                    <a href="?page=3">
                        <li class="easeInOut">
                            <h2>Próximamente</h2>
                            <p>//</p>
                        </li>
                    </a>
                </div>
                <div id="newsRRSS">

                    <h2>Sígueme</h2>
                    <ul>
                        <li class="easeInOut">
                            <img id="sn-ico" src="../img/rrss/sn-br.svg" alt="instagram">
                            <div id="newsSnapID" class="easeInOut">
                                camifdzoficial
                            </div>
                        </li>
                        <li class="easeInOut">
                            <a target="_blank" href="http://instagram.com/CamiFdzOficial">
                                <img id="ig-ico" src="../img/rrss/ig-br.svg" alt="snapchat">
                            </a>
                        </li>
                        <li class="easeInOut">
                            <a target="_blank" href="http://facebook.com/CamiFdzOficial">
                                <img id="fb-ico" src="../img/rrss/fb-br.svg" alt="facebook">
                            </a>
                        </li>
                        <li class="easeInOut">
                            <a target="_blank" href="http://twitter.com/CamiFdzOficial">
                                <img id="tw-ico" src="../img/rrss/tw-br.svg" alt="twitter">
                            </a>
                        </li>
                        <li class="easeInOut">
                            <a target="_blank" href="https://www.youtube.com/channel/UCOFQ_bYeuixn-NZnHFpPlrg">
                                <img id="yt-ico" src="../img/rrss/yt-br.svg" alt="youtube">
                            </a>
                        </li>
                    </ul>
                </div>    
            </div>

            <div id="newsContainer">
                <?php
                    $p=$_GET['page'];

                    $page="sub/".$p.".php";

                    if (file_exists($page))
                        include($page);

                    elseif ($p=="")
                        include("sub/1.php");
                    
                    else
                        include("sub/404.php");
                ?>
            </div>     
        </div>

        <div id="loader">
            <div class="progressBar easeInOut"></div>
        </div>





        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
        <script src="../js/plugins.js"></script>
        <script src="../js/main.js"></script>

        

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-63516008-5', 'auto');
          ga('send', 'pageview');

        </script>
    </body>
</html>
