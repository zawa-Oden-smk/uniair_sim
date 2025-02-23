//メインテーブルエリアのid設定
var Tableid = 'maintable' 

//変数定義
var color = {'whole':'全て','red':'Red','blue':'Blue','green':'Green','yellow':'Yellow','purple':'Purple'}  
var scine = {'whole':'全て','sakura01':'サイマジョ+','sakura02':'全ツ\'18 FLガラスを割れ！','sakura03':'全ツ\'18 FL危なっかしい計画','sakura04':'全ツ\'18 FL手を繋いで帰ろうか','sakura05':'全ツ\'18 FL語るなら未来を…','sakura06':'全ツ\'18 FL世界には愛しかない','sakura07':'全ツ\'18 FL二人セゾン','sakura08':'3rdYAL FLNobody','sakura09':'3rdYAL FL危なっかしい計画','sakura10':'3rdYAL FL世界には愛しかない','sakura11':'3rdYAL FL手を繋いで帰ろうか','sakura12':'3rdYAL FL東京タワーはどこから見える？','sakura13':'3rdYAL FL僕たちの戦争','sakura14':'3rdYAL FL二人セゾン','sakura15':'武道館3rdYAL FL黒い羊','sakura16':'欅共和国2018 Noir','sakura17':'欅共和国2019 FL青空が違う','sakura18':'欅共和国2019 FLアンビバレント','sakura19':'欅共和国2019 FL世界には愛しかない','sakura20':'欅共和国2019 FL手を繋いで帰ろうか','sakura21':'東京ドーム2019 FLバレエと少年','sakura22':'東京ドーム2019 FL語るなら未来を…','sakura23':'東京ドーム2019 FL結局、じゃあねしか言えない','sakura24':'東京ドーム2019 FL制服と太陽','sakura25':'東京ドーム2019 FL避雷針','sakura26':'東京ドーム2019 FL不協和音','sakura27':'櫻坂46 DCDL FLNobody\'s fault','sakura28':'櫻坂46 DCDL FL最終の地下鉄に乗って','sakura29':'櫻坂46 DCDL FLPlastic regret','sakura30':'櫻坂46 DCDL FLなぜ恋','sakura31':'櫻坂46 DCDL FLブルームーンキス','sakura32':'櫻坂46 DCDL FL半信半疑','sakura33':'BACKS LIVE!! FLMicroscope','sakura34':'BACKS LIVE!! FLそれが愛なのね','sakura35':'BACKS LIVE!! FL君と僕と洗濯物','sakura36':'BACKS LIVE!! FLなぜ恋','sakura37':'BACKS LIVE!! FLブルームーンキス','sakura38':'1st TOUR 2021 FLPlastic regret','sakura39':'1st TOUR 2021 FLBAN','sakura40':'1st TOUR 2021 FL半信半疑','sakura41':'WKF2021 FLそれが愛なのね','sakura42':'WKF2021 FL君と僕と洗濯物','sakura43':'WKF2021 FLMicroscope','sakura44':'WKF2021 FL思ったよりも寂しくない','sakura45':'WKF2021 FL櫻坂の詩','sakura46':'WKF2022 FL無言の宇宙','sakura47':'WKF2022 FLコンセントレーション','sakura48':'WKF2022 FL恋が絶滅する日','sakura49':'WKF2022 FLバスルームトラベル','sakura50':'WKF2022 FL太陽は見上げる人を選ばない','sakura51':'1stYAL FLなぜ恋','sakura52':'1stYAL FLBAN','sakura53':'1stYAL FL櫻坂の詩','sakura54':'1stYAL FL流れ弾','sakura55':'1stYAL FL偶然の答え','sakura56':'1stYAL FL思ったよりも寂しくない','sakura57':'1stYAL FL無言の宇宙','sakura58':'1stYAL FLジャマイカビール','sakura59':'2nd TOUR FL流れ弾','sakura60':'2nd TOUR FL五月雨よ','sakura61':'2nd TOUR FL断絶','sakura62':'2nd TOUR FL条件反射で泣けて来る','sakura63':'2nd TOUR FL摩擦係数','sakura64':'2nd TOUR FL不協和音','sakura65':'2nd TOUR FL砂塵','sakura66':'3rd TOUR FL夏の近道','sakura67':'3rd TOUR FLCool','sakura68':'3rd TOUR FL摩擦係数','sakura69':'3rd TOUR FL無念','sakura70':'3rd TOUR FLBAN'
,'sakura71':'3rd TOUR FLDead end','sakura72':'3rd TOUR FL桜月','sakura73':'3rd YAL FL条件反射で泣けて来る','sakura74':'3rd YAL FL僕たちの La vie en rose','sakura75':'3rd YAL FL静寂の暴力','sakura76':'3rd YAL FLAnthem time','sakura77':'3rd YAL FL隙間風よ','sakura78':'3rd YAL FLNobody\'s fault','sakura79':'3rd YAL FL承認欲求','sakura80':'4th ARENA TOUR 2024 FLマモリビト','sakura81':'8th Single BACKS LIVE!! FL断絶','sakura82':'8th Single BACKS LIVE!! FL無念','sakura83':'エレガンス・ルージュ\'19','sakura84':'二人セゾン+','sakura85':'ガラスを割れ！+','sakura86':'ラグジュアリー・ホリディ','sakura87':'アンビバレント+','sakura88':'Nobody+','sakura89':'ブライトフラワーガーデン','sakura90':'風に吹かれても+','sakura91':'ナチュラル・スウィフト','sakura92':'世界には愛しかない+','sakura93':'次の自分へ、進むあなたに。','sakura94':'聖夜の街角で','sakura95':'春が舞い込む街角','sakura96':'誰がその鐘を鳴らすのか？+','sakura97':'Nobody\'s fault+','sakura98':'これが、私たちの現在形。','sakura99':'雨音が包むおうち時間','sakura100':'なぜ　恋をして来なかったんだろう？+','sakura101':'静寂に包まれた洋書室にて','sakura102':'Buddies+','sakura103':'クリスマスベルの音色が彩る夜に','sakura104':'BAN+','sakura105':'春風が誘う森を抜けて','sakura106':'思ったよりも寂しくない+','sakura107':'揺れる淡い記憶を覗き込んで','sakura108':'流れ弾+','sakura109':'紅葉が誘う憩いのひと時','sakura110':'聖なる夜と甘味の幸福','sakura111':'Dead end+','sakura112':'春を彩る天空の花','sakura113':'五月雨よ+','sakura114':'放課後のジャムセッション','sakura115':'僕のジレンマ+','sakura116':'夏の近道+','sakura117':'紅葉彩る湯屋の花','sakura118':'幸せが照らす花道の先へ','sakura119':'摩擦係数','sakura120':'櫻色の幕開け','sakura121':'降り積もる心の贈り物','sakura122':'静寂の暴力+','sakura123':'桜月','sakura124':'MV 車間距離','sakura125':'MV マモリビト','sakura126':'MV ドローン旋回中','sakura127':'MV Cool','sakura128':'Start over!','sakura129':'「3rd Single BACKS LIVE!!」衣装','sakura130':'承認欲求','sakura131':'確信的クロワッサン','sakura132':'「3rd YEAR ANNIVERSARY LIVE」ライブ衣装'
,'hinata01':'キュン+','hinata02':'DCL FL JOYFUL LOVE','hinata03':'DCL FL 君に話しておきたいこと','hinata04':'DCL FL キュン','hinata05':'DCL FL 抱きしめてやる','hinata06':'DCL FL 沈黙が愛なら','hinata07':'DCL FL ときめき草','hinata08':'DCL FL ハッピーオーラ','hinata09':'DCL FL 耳に落ちる涙','hinata10':'FL Cage','hinata11':'FL Dash&Rush','hinata12':'FL JOYFUL LOVE','hinata13':'FL My god','hinata14':'FL 期待していない自分','hinata15':'FL こんなに好きになっちゃっていいの？','hinata16':'FL ドレミソラシド','hinata17':'FL ひらがなで恋したい','hinata18':'FL 約束の卵','hinata19':'FL やさしさが邪魔をする','hinata20':'ひなくり2019 FLDash&Rush','hinata21':'ひなくり2019 FL誰よりも高く跳べ！','hinata22':'ひなくり2019 FLホントの時間','hinata23':'ひなくり2019 FLまさか 偶然…','hinata24':'ひなくり2019 FL約束の卵','hinata25':'ひなくり2020 FLドレミ','hinata26':'ひなくり2020 FLまさか 偶然…','hinata27':'ひなくり2020 FLただがむしゃらに','hinata28':'ひなくり2020 FL約束の卵2020','hinata29':'ひなくり2020 FL夏ジャム','hinata30':'3rdワンマン FL NO WAR in the future','hinata31':'3rdワンマン FL キツネ','hinata32':'3rdワンマン FL君に話しておきたいこと','hinata33':'ひな誕祭 FL My fans','hinata34':'ひな誕祭 FL アザトカワイイ','hinata35':'ひな誕祭 FL キツネ','hinata36':'ひな誕祭 FL 期待していない自分','hinata37':'ひな誕祭 FL 青春の馬','hinata38':'ひな誕祭 FL 僕たちは付き合っている','hinata39':'全国おひさま化計画 FLキュン','hinata40':'全国おひさま化計画 FL君しか勝たん','hinata41':'全国おひさま化計画 FLソンナコトナイヨ','hinata42':'WKF2021 FL青春の馬','hinata43':'WKF2021 FLアザトカワイイ','hinata44':'WKF2021 FL声の足跡','hinata45':'WKF2021 FLNO WAR in the future 2020','hinata46':'WKF2022 FL思いがけないダブルレインボー','hinata47':'WKF2022 FLもうこんなに好きになれない','hinata48':'WKF2022 FL好きということは…','hinata49':'WKF2022 FL僕なんか','hinata50':'3回目のひな誕祭 FLひらがなけやき','hinata51':'3回目のひな誕祭 FL永遠の白線','hinata52':'3回目のひな誕祭 FLJOYFUL LOVE','hinata53':'3回目のひな誕祭 FL抱きしめてやる','hinata54':'3回目のひな誕祭 FLってか','hinata55':'ひなくり2021 FL約束の卵2020','hinata56':'ひなくり2021 FLRight?','hinata57':'ひなくり2021 FL膨大な夢に押し潰されて','hinata58':'ひなくり2021 FLアディショナルタイム','hinata59':'HST 2022 FL日向坂','hinata60':'HST 2022 FLってか','hinata61':'HST 2022 FL僕なんか','hinata62':'HST 2022 FL恋した魚は空を飛ぶ','hinata63':'HST 2022 FLブルーベリー＆ラズベリー','hinata64':'HST 2022 FLゴーフルと君','hinata65':'4回目のひな誕祭 FLCage','hinata66':'4回目のひな誕祭 FL一番好きだとみんなに言っていた小説のタイトルを思い出せない','hinata67':'4回目のひな誕祭 FL半分の記憶','hinata68':'4回目のひな誕祭 FL月と星が踊るMidnight','hinata69':'4回目のひな誕祭 FL青春の馬','hinata70':'4回目のひな誕祭 FLOne choice'
,'hinata71':'ひなくり2022 FLママのドレス','hinata72':'ひなくり2022 FL君しか勝たん','hinata73':'ひなくり2022 FL誰よりも高く跳べ！2020','hinata74':'ひなくり2022 FL世界にはThank you！が溢れている','hinata75':'ひなくり2022 FLブルーベリー＆ラズベリー','hinata76':'HTT 2023 FLひらがなで恋したい','hinata77':'HTT 2023 FLMy fans','hinata78':'HTT 2023 FL最初の白夜','hinata79':'HTT 2023 FLシーラカンス','hinata80':'HTT 2023 FLAm I ready?','hinata81':'HTT 2023 FL期待していない自分','hinata82':'HTT 2023 FL君は0から1になれ','hinata83':'5回目のひな誕祭 FLハッピーオーラ','hinata84':'5回目のひな誕祭 FL未熟な怒り','hinata85':'5回目のひな誕祭 FL月と星が踊るMidnight','hinata86':'5回目のひな誕祭 FL見たことない魔物','hinata87':'11th Single ひなた坂46 LIVE FL夏色のミュール','hinata88':'期待していない自分+','hinata89':'セルリアンフラワーズ\'19','hinata90':'JOYFUL LOVE+','hinata91':'ホワイト・ドリーミング','hinata92':'ハッピーオーラ+','hinata93':'君に話しておきたいこと+','hinata94':'アーリーサマーシャイン','hinata95':'キツネ+','hinata96':'ブリック・ストリート','hinata97':'ドレミソラシド+','hinata98':'黄昏雪色のクリスマスを','hinata99':'花薫る早春の昼下がり','hinata100':'こんなに好きになっちゃっていいの？+','hinata101':'ソンナコトナイヨ+','hinata102':'雨上がりの朝日の先に','hinata103':'青春の馬+','hinata104':'夕日差し込む静寂の時間','hinata105':'アザトカワイイ+','hinata106':'星々の瞬きが祝福する夜に','hinata107':'君しか勝たん+','hinata108':'夢運ぶ春のひととき','hinata109':'声の足跡+','hinata110':'ひなたのさしいれ','hinata111':'巡る記憶に浮かぶ儚い時間','hinata112':'ってか+','hinata113':'秋陽ふりそそぐ山路の寄り道','hinata114':'甘降る庭と舞い踊る白雪','hinata115':'harapeko☆star','hinata116':'何度でも何度でも+','hinata117':'春を運ぶ幻想の風','hinata118':'ブルーベリー&ラズベリー+','hinata119':'僕なんか+','hinata120':'蒼幕のクランクイン','hinata121':'僕らの秘密のライブステージ','hinata122':'飛行機雲ができる理由+','hinata123':'秋そよぐ癒しの陽光','hinata124':'光降り注ぐ喝采を浴びて','hinata125':'月と星が踊るMidnight','hinata126':'甘く溶ける想いを包み込んで','hinata127':'シーラカンス+','hinata128':'One choice','hinata129':'MV 真夜中の懺悔大会','hinata130':'MV 見たことない魔物','hinata131':'MV ゴーフルと君','hinata132':'MV 世界にはThank you！が溢れている','hinata133':'Am I ready?','hinata134':'いつもと違う私へテイクオフ！','hinata135':'ゼンブ・オブ・トーキョー','hinata136':'「3回目のひな誕祭」ライブ衣装','hinata137':'君は0から1になれ','hinata138':'ロッククライミング','hinata139':'「4回目のひな誕祭」黄色衣装'
,'keyaki01':'NEW YEAR\'20','keyaki02':'UNI\'S ON AIR 1st ANNIVERSARY','keyaki03':'NEW YEAR\'21','keyaki04':'その日を境に、世界が変わった。','keyaki05':'想い響く夏祭り','keyaki06':'UNI\'S ON AIR 2nd ANNIVERSARY','keyaki07':'NEW YEAR\'22','keyaki08':'Tour\'21 at 2.5th Anniv.','keyaki09':'清夏彩る涼の装','keyaki10':'UNI\'S ON AIR 3rd ANNIVERSARY','keyaki11':'NEW YEAR\'23','keyaki12':'Tour\'22 at 3.5th Anniv.','keyaki13':'真夏のシーサイドバケーション','keyaki14':'UNI\'S ON AIR 4th ANNIVERSARY','keyaki15':'NEW YEAR\'24','keyaki16':'Tour\'23 at 4.5th Anniv.','keyaki17':'UNIFES\'24 summer','keyaki18':'UNI\'S ON AIR 5th ANNIVERSARY','keyaki19':'新参者','keyaki20':'NEW YEAR\'25','keyaki21':'Live Online\'20 at 1.5th Anniv.','keyaki22':'Precious','keyaki23':'Precious pair','keyaki24':'S.teller','keyaki25':'HAPPY BIRTHDAY 1','keyaki26':'HAPPY BIRTHDAY 2','keyaki27':'HAPPY BIRTHDAY 3','keyaki28':'HAPPY BIRTHDAY 4'}
var member = {'whole':'全て','uemura':'上村莉菜','ozeki':'尾関梨香','koike':'小池美波','kobayashi':'小林由依','fuyuka':'齋藤冬優花','sugai':'菅井友香','habu':'土生瑞穂','harada':'原田葵','akane':'守屋茜','rika':'渡辺梨加','risa':'渡邉理佐','inoue':'井上梨名','endou':'遠藤光莉','oozono':'大園玲','oonuma':'大沼晶保','kousaka':'幸阪茉里乃','seki':'関有美子','takemoto':'武元唯衣','hono':'田村保乃','fujiyoshi':'藤吉夏鈴','masumoto':'増本綺良','rina':'松田里奈','morita':'森田ひかる','rena':'守屋麗奈','ten':'山﨑天','ishirika':'石森璃花','enriko':'遠藤理子','odakura':'小田倉麗奈','nagisa':'小島凪紗','airi':'谷口愛季','yuzuki':'中嶋優月','mio':'的野美青','itoha':'向井純葉','yuu':'村井優','miu':'村山美羽','mizuki':'山下瞳月','ishimori':'石森虹花','oda':'織田奈那','shiori':'佐藤詩織','suzumoto':'鈴本美愉','nagasawa':'長沢菜々香','hirate':'平手友梨奈','matsudaira':'松平璃子','ushio':'潮紗理菜','kageyama':'影山優佳','shiho':'加藤史帆','kyouko':'齊藤京子','kumi':'佐々木久美','mirei':'佐々木美玲','takase':'高瀬愛奈','takamoto':'高本彩花','higashimura':'東村芽依','kanemura':'金村美玖','kawata':'河田陽菜','kosaka':'小坂菜緒','tomita':'富田鈴花','nibu':'丹生明里','hamagishi':'濱岸ひより','konoka':'松田好花','manamo':'宮田愛萌','miho':'渡邉美穂','hinano':'上村ひなの','mikuni':'髙橋未来虹','marie':'森本茉莉','haruyo':'山口陽世','ishiduka':'石塚瑶季','kishi':'岸帆夏','konishi':'小西夏菜実','shimizu':'清水理央','shogenji':'正源司陽子','kirari':'竹内希来里','hirao':'平尾帆夏','hiraoka':'平岡海月','fujishima':'藤嶌果歩','miyachi':'宮地すみれ','yamashita':'山下葉留花','rinashi':'渡辺莉奈','iguchi':'井口眞緒'}
var kitai = {'k0':'全て','k1':'3.72%+ (7-28-6-19-0,28-10-3-0-10)','k2':'3.68% (7-28-6-19-0)','k3':'3.68% (7-28-6-19-0)(S.teller)','k4':'3.68% (8-16-7-30-0)(S.teller)','k5':'3.61%+ (9-20-9-0-65)(S.teller)','k6':'3.50%+ (8-14-9-25-0,14-14-3-0-10)','k7':'3.49%+ (11-26-15-0-40)','k8':'3.45% (8-38-5-18-0)(MV C.C.)','k9':'3.40% (8-14-9-25-0)','k10':'3.36% (10-55-8-11-0)(MV C.C.)','k11':'3.34%+ (9-55-4-0-51)(MV C.C.)','k12':'3.25%+ (7-28-6-13-10)','k13':'3.14% (8-19-7-22-0)','k14':'3.07% (7-30-6-15-0)','k15':'3.05%+ (7-28-6-12-10)','k16':'2.88% (7-55-6-9-0)(MV C.C.)','k17':'2.75%+ (6-24-5-12-12)','k18':'2.57%+ (12-38-12-0-28)(MV C.C.)','k19':'2.52% (7-28-6-13-0)','k20':'2.50%+ (9-20-9-0-45)','k21':'2.50% (4-35-3-12-0)','k22':'2.46% (8-16-7-20-0)','k23':'2.45% (7-30-6-12-0)','k24':'2.34%+ (9-18-7-12-19)','k25':'2.32% (7-28-6-12-0)','k26':'2.22% (8-18-5-22-0)','k27':'2.12% (8-19-5-20-0)','k28':'2.04% (9-23-8-12-0)','k29':'2.01%+ (8-17-5-17-10)','k30':'1.96% (9-22-8-12-0)','k31':'1.86% (8-21-7-12-0)','k32':'1.73% (8-16-5-19-0)','k33':'1.73%+ (9-18-9-0-34)','k34':'1.63% (8-17-5-17-0)','k35':'1.43% (10-15-9-12-0)','k36':'1.09% (11-11-10-12-0)','k37':'0.95% (7-10-6-12-0)','k38':'0.78%+ (9-18-7-0-19)','k39':'0.69%+ (4-35-3-0-10)','k40':'0.68%+ (7-30-6-0-10)','k41':'0.67%+ (6-24-5-0-12)','k42':'0.57% (12-6-10-12-0)','k43':'0.57%+ (9-23-8-0-10)','k44':'0.55%+ (9-22-8-0-10)','k45':'0.52%+ (8-21-7-0-10)','k46':'0.40%+ (10-15-9-0-10)','k47':'0.30%+ (11-11-10-0-10)','k48':'0.26%+ (7-10-6-0-10)','k49':'0.16%+ (12-6-10-0-10)','k50':'Fleek (3-20-?-14-0)','k51':'0.00% (0-0-0-0-0)'}
var kitai2 = {'k0':'全て','k1':'3.72%','k2':'3.68%','k3':'3.68% ','k4':'3.68%  ','k5':'3.61%','k6':'3.50%','k7':'3.49%','k8':'3.45%','k9':'3.40%','k10':'3.36%','k11':'3.34%','k12':'3.25%','k13':'3.14%','k14':'3.07%','k15':'3.05%','k16':'2.88%','k17':'2.75%','k18':'2.57%','k19':'2.52%','k20':'2.50% ','k21':'2.50%','k22':'2.46%','k23':'2.45%','k24':'2.34%','k25':'2.32%','k26':'2.22%','k27':'2.12%','k28':'2.04%','k29':'2.01%','k30':'1.96%','k31':'1.86%','k32':'1.73%','k33':'1.73% ','k34':'1.63%','k35':'1.43%','k36':'1.09%','k37':'0.95%','k38':'0.78%','k39':'0.69%','k40':'0.68%','k41':'0.67%','k42':'0.57%','k43':'0.57% ','k44':'0.55%','k45':'0.52%','k46':'0.40%','k47':'0.30%','k48':'0.26%','k49':'0.16%','k50':'Fleek','k51':'0.00%'}
var cs = {'all':'全て','all40':'All40%','all35':'All35%','all35M':'All35%(M)','all25':'All25%','vo70':'Vo70%','da70':'Da70%','pe70':'Pe70%','voda40':'VoDa40%','dape40':'DaPe40%','vope40':'VoPe40%','voda50':'VoDa50%','dape50':'DaPe50%','vope50':'VoPe50%','voda50zenpe15':'VoDa50% & 全Pe15%','dape50zenvo15':'DaPe50% & 全Vo15%','vope50zenda15':'VoPe50% & 全Da15%','vo70senda40':'Vo70% & 全Da40%','vo70zenpe40':'Vo70% & 全Pe40%','da70zenvo40':'Da70% & 全Vo40%','da70zenpe40':'Da70% & 全Pe40%','pe70zenvo40':'Pe70% & 全Vo40%','pe70zenda40':'Pe70% & 全Da40%','vo85':'Vo85%','da85':'Da85%','pe85':'Pe85%','zenvo70':'全Vo70%','zenda70':'全Da70%','zenpe70':'全Pe70%','zenvo85':'全Vo85%','zenda85':'全Da85%','zenpe85':'全Pe85%','allcol40':'全色All40%','vodacol55':'全色VoDa55%','dapecol55':'全色DaPe55%','vopecol55':'全色VoPe55%','vocol90':'全色Vo90%','dacol90':'全色Da90%','pecol90':'全色Pe90%','allcol40s18':'全色All40% & S1.8倍','vodacol55s18':'全色VoDa55% & S1.8倍','dapecol55s18':'全色DaPe55% & S1.8倍','vopecol55s18':'全色VoPe55% & S1.8倍','vocol90s18':'全色Vo90% & S1.8倍','dacol90s18':'全色Da90% & S1.8倍','pecol90s18':'全色Pe90% & S1.8倍','allmaxst85vo065bai':'ST AllMax0.65倍 & Vo85%','allmaxst85da065bai':'ST AllMax0.65倍 & Da85%','allmaxst85pe065bai':'ST AllMax0.65倍 & Pe85%','allmaxsts225065bai':'ST AllMax0.65倍 & S2.25倍','allst40all050bai':'ST All0.5倍 & All40%','allst85vo050bai':'ST All0.5倍 & Vo85%','allst85da050bai':'ST All0.5倍 & Da85%','allst85pe050bai':'ST All0.5倍 & Pe85%','vodast55060bai':'ST VoDa0.6倍 & VoDa55%','dapest55060bai':'ST DaPe0.6倍 & DaPe55%','vopest55060bai':'ST VoPe0.6倍 & VoPe55%','vost85070bai':'ST Vo0.7倍 & Vo85%','dast85070bai':'ST Da0.7倍 & Da85%','pest85070bai':'ST Pe0.7倍 & Pe85%','s225':'S2.25倍','vo70siagari25':'Vo70% & 仕上がり度25%','da70siagari25':'Da70% & 仕上がり度25%','pe70siagari25':'Pe70% & 仕上がり度25%','vo70siagari50':'Vo70% & 仕上がり度50%','da70siagari50':'Da70% & 仕上がり度50%','pe70siagari50':'Pe70% & 仕上がり度50%'}

//画面読み込み後の動作
 window.onload=function(){
	tSortInit();
 for(let key in color){
	let op = document.createElement("option");
	op.value = key;
    op.text = color[key];
	document.getElementById("color").appendChild(op)
  }

 for(let key in scine){
    let op = document.createElement("option"); 
    op.value = key;
    op.text = scine[key];
    document.getElementById("scine").appendChild(op)
  }

 for(let key in member){
    let op = document.createElement("option"); 
    op.value = key;
    op.text = member[key];
    document.getElementById("member").appendChild(op)
  }

 for(let key in kitai){
    let op = document.createElement("option"); 
    op.value = key;
    op.text = kitai[key];
    document.getElementById("kitai").appendChild(op)
  }

 for(let key in cs){
    let op = document.createElement("option"); 
    op.value = key;
    op.text = cs[key];
    document.getElementById("cs").appendChild(op)
  }

 InsertTableRows(Object.keys(list))
}

var no_arr = new Array()

function InsertTableRows(no_arr){
	var Tableobj = document.getElementById(Tableid)
	for(let no of no_arr){ 
		no = parseInt(no)
		let scine_k = Object.keys(scine).filter(function(k){return scine[k] == list[no].scine})[0];
		let member_k = Object.keys(member).filter(function(k){return member[k] == list[no].member})[0];	
		let kitai_k = Object.keys(kitai2).filter(function(k){return kitai2[k] == list[no].kitai2})[0];	
		let cs_k = Object.keys(cs).filter(function(k){return cs[k] == list[no].cs})[0]; 
		let eRow = Tableobj.insertRow(-1)
		let color = list[no].color
		let scinescine = list[no].scine
		let membermember = list[no].member
		let kitaikitai = list[no].kitai2
		let Vo = list[no].Vo
		let Da = list[no].Da
		let Pe = list[no].Pe
		let allstat = list[no].allstat
		let cscs = list[no].cs
		let pair = list[no].pair
        let skill = list[no].skill
        let group = list[no].group
        eRow.setAttribute(color,"")
        eRow.setAttribute(scine_k,"")
		eRow.setAttribute(member_k,"")
		eRow.setAttribute(kitai_k,"")
		eRow.setAttribute(cs_k,"")
		eRow.className = color;
		eRow.insertCell(-1).innerHTML = no+1;
		eRow.insertCell(-1).innerHTML = color;
		eRow.insertCell(-1).innerHTML = scinescine;
	    eRow.insertCell(-1).innerHTML = membermember;
		eRow.insertCell(-1).innerHTML = kitaikitai;
		eRow.insertCell(-1).innerHTML = Vo;
		eRow.insertCell(-1).innerHTML = Da;
		eRow.insertCell(-1).innerHTML = Pe;
		eRow.insertCell(-1).innerHTML = allstat;
        eRow.insertCell(-1).innerHTML = cscs;
		eRow.insertCell(-1).innerHTML = pair;
		eRow.insertCell(-1).innerHTML = skill;
        eRow.insertCell(-1).innerHTML = group;
	}
}

//フィルター動作設定
function filter(){
	var Tableobj = document.getElementById(Tableid);
	let color = document.getElementById("color").value
	let scine = document.getElementById("scine").value
    let member = document.getElementById("member").value
	let kitai = document.getElementById("kitai").value
    let cs = document.getElementById("cs").value
	Tableobj.className = ((color!="whole")?color:'') + ' ' + ((scine!="whole")?scine:'') + ' ' + ((member!="whole")?member:'') + ' ' + ((kitai!="k0")?kitai:'') + ' ' + ((cs!="whole")?cs:'')
}

//ソート動作設定
var gSortBtnRow = 0;
//テーブル初期設定
function tSortInit(){	
	var wTABLE  = document.getElementById(Tableid);
	var wTR     = wTABLE.rows;
	var wAddBtn = ''; 
	for(var i=0; i < wTR.length; i++){ 
		var wTD = wTABLE.rows[i].cells;
		for(var j=0; j < wTD.length; j++){ 
			if(wTD[j].getAttribute('cmanSortBtn') !== null){ 
				wAddBtn  = '<div class="tsImgArea">';
				wAddBtn += '<svg class="tsImg" id="ts_A_'+j+'" onclick="tSort(this)"><path d="M4 0 L0 6 L8 6 Z"></path></svg>';
				wAddBtn += '<svg class="tsImg" id="ts_D_'+j+'" onclick="tSort(this)"><path d="M0 0 L8 0 L4 7 Z"></path></svg>';
				wAddBtn += '</div>'; 
				wTD[j].innerHTML = wTD[j].innerHTML+wAddBtn;
			}
		} 
		if(wAddBtn != ''){ gSortBtnRow = i; break; }
	}
}
//ソート実行
function tSort(argObj){		
	var wSortKey = argObj.id.split('_'); 
	var wTABLE = document.getElementById(Tableid);
	var wTR = wTABLE.rows;
	var wItem = [];
	var wItemSort = [];
	var wMoveRow = [];
	var wNotNum = 0;
	var wStartRow = gSortBtnRow + 1;
	for(var i = wStartRow; i < wTR.length; i++){
	  var j = i - wStartRow;
	  wItem[j] = wTR[i].cells[wSortKey[2]].innerText.toString();
	  if(!wItem[j].match(/^[-]?[0-9,\.]+$/)) wNotNum = 1;    
	}
	  wItemSort = wItem.slice(0, wItem.length);
	  if(wSortKey[1] == 'A'){
		(wNotNum == 0)? wItemSort.sort(sortNumA) : wItemSort.sort(sortStrA)
	  }
	  else{
		(wNotNum == 0)? wItemSort.sort(sortNumD) : wItemSort.sort(sortStrD);
	  } 
	for(var i = 0; i < wItemSort.length; i++){
		for(var j = 0; j < wItem.length; j++){
		  if(wItemSort[i] == wItem[j]){
			wMoveRow[i] = j + wStartRow;
			wItem.splice(j, 1);
			break;
		  }
		}
	}
	for(var i = 0; i < wMoveRow.length; i++){
		var wMoveTr = wTABLE.rows[wMoveRow[i]];
		var wLastTr = wTABLE.rows[wTABLE.rows.length - 1];
		wLastTr.parentNode.insertBefore(wMoveTr.cloneNode(true), wLastTr.nextSibling);
		wTABLE.deleteRow(wMoveRow[i]); 
	}
	var elmImg = document.getElementsByClassName('tsImg');
	for (var i = 0; i < elmImg.length; i++) { 
		elmImg[i].style.backgroundColor = (elmImg[i].id == argObj.id)? '#ffc400' : ''
	} 
}

//数字ソート（昇順）
function sortNumA(a, b) {
	a = parseInt(a.replace(/,/g, '')); b = parseInt(b.replace(/,/g, ''));
	return a - b;
}
//数字ソート（降順）
function sortNumD(a, b) {
	a = parseInt(a.replace(/,/g, '')); b = parseInt(b.replace(/,/g, ''));
	return b - a;
}
//文字ソート（昇順）
function sortStrA(a, b){
	a = a.toLowerCase(); b = b.toLowerCase();
	return (a < b)? -1 : (a > b)? 1 : 0
}
//文字ソート（降順）
function sortStrD(a, b){
	a = a.toLowerCase(); b = b.toLowerCase();
	return (b < a)? -1 : (b > a)? 1 : 0
}

