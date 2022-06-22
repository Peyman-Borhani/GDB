//  Constructible Objects Data Build

//  _template_ describes the model, meta-data and user data
//  add only what is needed to describe your data for internal usage.

const  template =  //Capitalized items describes internal data.(meta-data)
            {   Data:   { Is:   'array',    Content: 'raw',
                          Type: 'float',    Store: 'array',
                          Name: 'Raw_Data'
                },
                Export: { Is:   'array',    Content: 'JS objects', 
                          Type: 'object',   Store: 'array',
                          Name: 'data'
                },
                Build:  year=> build_Data(year), //to describe/call builder function
                Generate:  ['object',  'structure',  'full year date'],
                Tree: ['time.*',  'value'],  //Tree Hierarchy
                // Sub: tree branchs (optional, same structure in bellow object)
    
                //exported data structure (lowercase items)
                time: {year: 2018,  month: 1,  day: 1},
                value: 1.1  // Raw_Data, type: float values  
            }

/*  Raw data consist of main values, simple, minimal data store without 
    redundant info, keys, meta... can export as is or used to build into
    exported data. */

const  Raw_Data  = 
[ 27.58405298746434,31.74088841431117,35.892978753808926,39.63642029045179,40.79167357702531,47.691740220947764,49.377161099825415,52.47379203136591,50.40209743179448,61.47316837848548,58.22831552141069,59.36868132891698,62.10845687168416,51.259701958506724,56.247578870411644,55.483307642385164,55.85295564734231,48.3138216778343,53.071901176203866,50.873781097281885,49.7840315054249,52.34956807336156,53.79112543285674,53.984887985424805,58.56902893497121,54.76191372282466,63.38042554684846,55.452618512103065,65.60820758942769,56.82795136583009,70.3148022984224,65.86230944167264,72.05467846676524,72.99238887850564,67.03373730222785,69.97670934736414,73.08910595492105,81.43976528732057,73.62230936920984,82.15522801870938,77.99384538574678,85.62489628897463,86.93090666568217,75.99689788850394,88.46418548355727,86.20760396539865,81.88757639758437,79.58151786389108,80.96845249711073,73.54901807055447,75.65626118347262,78.41307347680399,74.60352602043042,72.28241570381236,72.24427397962566,64.80996965592134,67.37511361319652,65.5449131917524,65.4802711362433,62.207767815581086,59.78884720470812,67.51846586137782,68.752834400291,66.63416073573323,65.58601621691751,57.33498792621458,56.93436946311955,58.31144672902557,59.96407207657268,55.7861486424976,52.91803500214551,54.491591573038306,51.924409342593385,41.90263950118436,40.514436076485694,41.065887666854486,40.44445534031683,42.13922977216152,42.317162952084495,39.02881877743751,39.81917993955704,36.753197056053374,37.02203306330588,36.36014042161194,33.56275879100148,34.39112540787079,30.57170225544929,33.56826040802756,32.89895543218274,31.015658561825738,33.189179815787455,29.530756945582162,29.250978140719916,27.89635178919736,26.995427160624686,25.89631885043023,28.71812492475548,23.56476085365468,23.8550787876547,23.27046572075657,25.73099630369951,23.398760738394646,22.97970501784193,22.145587244500526,20.622578956226192,21.99297423796017,20.756081302371527,18.1983338834302,16.419404563645198,18.38192363882247,17.41452255210322,17.39866711593896,14.859371316920733,14.49488592297959,14.183858665721397,12.754187935636056,14.467536059608742,14.72962730689032,16.591675981296518,17.560385679284135,22.386250317504064,23.697029442697385,23.453148128592442,23.164700105036882,23.919034678006323,25.18353870528509,26.982824465076394,29.122512185000712,29.60160406576696,30.845749384528016,33.03296938636202,33.784707082446104,36.08545410406137,36.80597815439238,34.56062188644443,36.52666657165473,34.76705735297833,39.01598033743525,37.60979560604685,42.403895121650436,45.55998014298455,39.76704752577289,41.83196178430985,46.99399105885453,48.553566318637984,48.918166891087594,42.95391588314584,51.267649950057546,44.86104374986037,46.7183564731453,52.753001379260766,56.04835638442964,54.82119793390652,57.718938021257685,53.9914459224653,59.33050624063286,50.79074268713266,53.15657316197036,59.43675134021954,63.28437595760727,58.07099287435428,56.68728978119396,57.05079700873323,65.65087785161663,59.20877581396441,64.30200099280857,68.60774992100288,67.16628680993453,62.89644591741811,61.42888198118138,64.89813095653885,72.72701573552945,67.85006296129148,74.8567814889,66.24228046316296,68.09192660329269,75.30075953672075,68.7478054620306,76.2285023801364,82.945167109736,76.91811779365663,73.4904875247808,78.37882382739707,77.00224598364632,74.96345662377028,85.54303380001907,74.23916926437794,86.38109732705232,88.36203657839357,81.63303116061893,78.05188105610182,93.73294498110195,86.3226018109303,83.18571530136985,92.45097319531271,82.61971871486392,84.39935112744469,86.84420907417798,81.50766784637338,88.74841709228694,85.84190975050336,86.9594938103096,83.72572564120199,83.42754326770913,80.40755818165856,81.40515523172276,88.6671912474792,83.98197434091429,79.93747419607003,88.74666581089701,88.4887222568271,91.70282162754224,81.82327312829118,89.56625546634567,83.60742160062637,92.16271144958857,92.93451790057534,97.10629615852636,93.18989484413193,99.52744238602173,90.84973685659028,98.37517814040118,90.13525425607658,95.55125798221395,82.77346455876308,83.24854499361042,95.41999231944423,93.80228527345439,95.6453232668047,85.15427147925779,84.96447951638784,95.92739640648459,96.44143870862634,101.23323393804354,92.12092707164649,101.74117610271144,96.38311956379351,98.18485692799554,102.60080903938159,97.48394132428021,101.41501247525068,94.9501205245301,89.11429564465982,104.1842141132897,97.36185743859737,97.34376526297034,103.73609636859413,86.89420264148593,90.99445484839778,92.0197876339847,87.35412911434453,97.40224787139312,98.14732375673768,101.5147062059064,93.11950437404803,98.41765784798642,89.08499357950659,96.29213559344964,103.57528341068684,98.94258099235431,92.43383394007822,105.39681697822706,100.52663985092036,98.84754340440189,93.78502517034752,95.51435402626828,91.94633821567461,98.18484857755837,102.51694320185617,97.40549024974396,103.49718807374374,108.24441490057781,103.24675412744978,97.05089568637521,91.85875309835458,72.24590653541385,70.73707674373722,61.2106378263602,62.35889407826063,56.311930696659,51.462743547904374,47.99928302521288,42.735011616511976,35.82291867003256,28.706141122035454,24.289344698634036,22.56513000253429,18.862530899060324,18.164416367748263,16.25993836760582,15.849033589978859,12.581184324950792,12.46960767886934,13.203284995561251,12.751819244602629,13.815126496529205,14.44156419046133,12.030505290672643,13.426535837756518,13.141003741491893,12.216411608284261,12.437867813477077,12.228521667932771,13.587126038913974,12.016792589137491,13.01948020515645,12.70475528902004,13.018454073452016,12.505487262036313,13.467522897553604,13.748796553616549,11.974873751121669,11.8316362912944,13.864291857325023,12.071675684436165,12.314581956701367,13.223445358310986,12.346191421746546,12.0232072259563,13.367039701380252,12.232635114201212,13.348220671014012,13.508314659502604,12.630893498655155,12.632952849963768,11.645073051089117,13.845637677048611,12.567519871595463,13.927270152127294,12.179362670863737,12.471835488646303,11.71761488042106,12.181312973409113,12.662272671374286,13.859774226603497,11.643237368800426,11.646083130428282,13.3486102643562,13.421817450001853,13.734844672048157,11.808371821628475,13.906976670383472,13.161627469585584,13.642368164712535,12.755167209621261,12.13947468588139,13.68979129854326,11.812050924695251,11.71992287051065,13.003823991463284,13.124946877570311,11.844736927132542,11.770961792864846,10.926179837275598,11.155771630851676,11.63008791780728,10.216268005840389,13.611694182717626,17.47706580052263,20.900697260373697,20.44940301651778,23.47128311932538,28.63506505828928,29.567577074788517 
];

const data = [];  //main data to be exported

// calculate days of month entered
const  daysInM = (y,m)=> {return new Date(y, m, 0).getDate()}
//other date functions: d=new Date(), m=d.getMonth(), y=d.getFullYear();

//Generate dates and format data based on template structure
function  build_Data(y) {
    let  m=0, d=0, dim=0; //dim: number of days in a month
    for (let n of Raw_Data) 
        { d++;
          if(d>dim) { m++;   if(m>12) return; 
                      d=1;   dim = daysInM(y, m) }
          //Record pushed in data array based on template structure
          data.push({time: {year: y, month: m, day: d}, value: n});
    }
}
// Building the template. 
// same as using  build_Data(2018)  but from template data/access
template.Build(template.time.year);

export  default  data;

/*  A good use-case example seen here was a full year date information, per day,
    which can be generated on demand, therefore is unnessesary to include
    them in the stored data itself.
    Original data was 3+ times larger, by removing redundant information
    (date, keys, symbols...) it became 3x smaller, yet data is exported
    and fetched in the exact original form intended.
    Once data.js is loaded, processed items are pushed into data object.
*/
