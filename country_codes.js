var country_codes = [
  {title: 'Russia', name:'ru', code:89, mask: '# ### ###-##-##'},
  {title: 'Afghanistan', name:'af', code:93, mask: '+## #'},
  {title: 'Albania', name:'al', code:355, mask: '+### #'},
  {title: 'Algeria', name:'dz', code:213, mask: '+### #'},
  {title: 'American Samoa', name:'as', code:1, mask: '+# ### #'},
  {title: 'Andorra', name:'ad', code:376, mask: '+### #'},
  {title: 'Angola', name:'ao', code:244, mask: '+### #'},
  {title: 'Anguilla', name:'ai', code:1, mask: '+# ### #'},
  {title: 'Antarctica', name:'aq', code:672, mask: '+### #'},
  {title: 'Antigua and Barbuda', name:'ag', code:1, mask: '+# ### #'},
  {title: 'Argentina', name:'ar', code:54, mask: '+## #'},
  {title: 'Armenia', name:'am', code:374, mask: '+### #'},
  {title: 'Aruba', name:'aw', code:297, mask: '+### #'},
  {title: 'Australia', name:'au', code:61, mask: '+## #'},
  {title: 'Austria', name:'at', code:43, mask: '+## #'},
  {title: 'Azerbaijan', name:'az', code:994, mask: '+### #'},
  {title: 'Bahamas', name:'bs', code:1, mask: '+# ### #'},
  {title: 'Bahrain', name:'bh', code:973, mask: '+### #'},
  {title: 'Bangladesh', name:'bd', code:880, mask: '+### #'},
  {title: 'Barbados', name:'bb', code:1, mask: '+# ### #'},
  {title: 'Belarus', name:'by', code:375, mask: '+### ## ###-##-##'},
  {title: 'Belgium', name:'be', code:32, mask: '+## #'},
  {title: 'Belize', name:'bz', code:501, mask: '+### #'},
  {title: 'Benin', name:'bj', code:229, mask: '+### #'},
  {title: 'Bermuda', name:'bm', code:1, mask: '+# ### #'},
  {title: 'Bhutan', name:'bt', code:975, mask: '+### #'},
  {title: 'Bolivia', name:'bo', code:591, mask: '+### #'},
  {title: 'Bosnia and Herzegovina', name:'ba', code:387, mask: '+### #'},
  {title: 'Botswana', name:'bw', code:267, mask: '+### #'},
  {title: 'Brazil', name:'br', code:55, mask: '+## #'},
  {title: 'British Indian Ocean Territory', name:'io', code:'x', mask: '+#'},
  {title: 'British Virgin Islands', name:'vg', code:1, mask: '+# ### #'},
  {title: 'Brunei', name:'bn', code:673, mask: '+### #'},
  {title: 'Bulgaria', name:'bg', code:359, mask: '+### #'},
  {title: 'Burkina Faso', name:'bf', code:226, mask: '+### #'},
  {title: 'Burma (Myanmar)', name:'mm', code:95, mask: '+## #'},
  {title: 'Burundi', name:'bi', code:257, mask: '+### #'},
  {title: 'Cambodia', name:'kh', code:855, mask: '+### #'},
  {title: 'Cameroon', name:'cm', code:237, mask: '+### #'},
  {title: 'Canada', name:'ca', code:1, mask: '+# #'},
  {title: 'Cape Verde', name:'cv', code:238, mask: '+### #'},
  {title: 'Cayman Islands', name:'ky', code:1, mask: '+# ### #'},
  {title: 'Central African Republic', name:'cf', code:236, mask: '+### #'},
  {title: 'Chad', name:'td', code:235, mask: '+### #'},
  {title: 'Chile', name:'cl', code:56, mask: '+## #'},
  {title: 'China', name:'cn', code:86, mask: '+## #'},
  {title: 'Christmas Island', name:'cx', code:61, mask: '+## #'},
  {title: 'Cocos (Keeling) Islands', name:'cc', code:61, mask: '+## #'},
  {title: 'Colombia', name:'co', code:57, mask: '+## #'},
  {title: 'Comoros', name:'km', code:269, mask: '+### #'},
  {title: 'Cook Islands', name:'ck', code:682, mask: '+### #'},
  {title: 'Costa Rica', name:'cr', code:506, mask: '+### #'},
  {title: 'Croatia', name:'hr', code:385, mask: '+### #'},
  {title: 'Cuba', name:'cu', code:53, mask: '+## #'},
  {title: 'Cyprus', name:'cy', code:357, mask: '+### #'},
  {title: 'Czech Republic', name:'cz', code:420, mask: '+### #'},
  {title: 'Democratic Republic of the Congo', name:'cd', code:243, mask: '+### #'},
  {title: 'Denmark', name:'dk', code:45, mask: '+## #'},
  {title: 'Djibouti', name:'dj', code:253, mask: '+### #'},
  {title: 'Dominica', name:'dm', code:1, mask: '+# ### #'},
  {title: 'Dominican Republic', name:'do', code:1, mask: '+# ### #'},
  {title: 'Ecuador', name:'ec', code:593, mask: '+### #'},
  {title: 'Egypt', name:'eg', code:20, mask: '+## #'},
  {title: 'El Salvador', name:'sv', code:503, mask: '+### #'},
  {title: 'Equatorial Guinea', name:'gq', code:240, mask: '+### #'},
  {title: 'Eritrea', name:'er', code:291, mask: '+### #'},
  {title: 'Estonia', name:'ee', code:372, mask: '+### #'},
  {title: 'Ethiopia', name:'et', code:251, mask: '+### #'},
  {title: 'Falkland Islands', name:'fk', code:500, mask: '+### #'},
  {title: 'Faroe Islands', name:'fo', code:298, mask: '+### #'},
  {title: 'Fiji', name:'fj', code:679, mask: '+### #'},
  {title: 'Finland', name:'fi', code:358, mask: '+### #'},
  {title: 'France', name:'fr', code:33, mask: '+## #'},
  {title: 'French Polynesia', name:'pf', code:689, mask: '+### #'},
  {title: 'Gabon', name:'ga', code:241, mask: '+### #'},
  {title: 'Gambia', name:'gm', code:220, mask: '+### #'},
  {title: 'Gaza Strip', name:'', code:970, mask: '+### #'},
  {title: 'Georgia', name:'ge', code:995, mask: '+### #'},
  {title: 'Germany', name:'de', code:49, mask: '+## #'},
  {title: 'Ghana', name:'gh', code:233, mask: '+### #'},
  {title: 'Gibraltar', name:'gi', code:350, mask: '+### #'},
  {title: 'Greece', name:'gr', code:30, mask: '+## #'},
  {title: 'Greenland', name:'gl', code:299, mask: '+### #'},
  {title: 'Grenada', name:'gd', code:1, mask: '+# ### #'},
  {title: 'Guam', name:'gu', code:1, mask: '+# ### #'},
  {title: 'Guatemala', name:'gt', code:502, mask: '+### #'},
  {title: 'Guinea', name:'gn', code:224, mask: '+### #'},
  {title: 'Guinea-Bissau', name:'gw', code:245, mask: '+### #'},
  {title: 'Guyana', name:'gy', code:592, mask: '+### #'},
  {title: 'Haiti', name:'ht', code:509, mask: '+### #'},
  {title: 'Holy See (Vatican City)', name:'va', code:39, mask: '+## #'},
  {title: 'Honduras', name:'hn', code:504, mask: '+### #'},
  {title: 'Hong Kong', name:'hk', code:852, mask: '+### #'},
  {title: 'Hungary', name:'hu', code:36, mask: '+## #'},
  {title: 'Iceland', name:'is', code:354, mask: '+### #'},
  {title: 'India', name:'in', code:91, mask: '+## #'},
  {title: 'Indonesia', name:'id', code:62, mask: '+## #'},
  {title: 'Iran', name:'ir', code:98, mask: '+## #'},
  {title: 'Iraq', name:'iq', code:964, mask: '+### #'},
  {title: 'Ireland', name:'ie', code:353, mask: '+### #'},
  {title: 'Isle of Man', name:'im', code:44, mask: '+## #'},
  {title: 'Israel', name:'il', code:972, mask: '+### #'},
  {title: 'Italy', name:'it', code:39, mask: '+## #'},
  {title: 'Ivory Coast', name:'ci', code:225, mask: '+### #'},
  {title: 'Jamaica', name:'jm', code:1, mask: '+# ### #'},
  {title: 'Japan', name:'jp', code:81, mask: '+## #'},
  {title: 'Jersey', name:'je', code:'x', maks:'+#'},
  {title: 'Jordan', name:'jo', code:962, mask: '+### #'},
  {title: 'Kazakhstan', name:'kz', code:7, mask: '+# #'},
  {title: 'Kenya', name:'ke', code:254, mask: '+### #'},
  {title: 'Kiribati', name:'ki', code:686, mask: '+### #'},
  {title: 'Kosovo', name:'', code:381, mask: '+### #'},
  {title: 'Kuwait', name:'kw', code:965, mask: '+### #'},
  {title: 'Kyrgyzstan', name:'kg', code:996, mask: '+### #'},
  {title: 'Laos', name:'la', code:856, mask: '+### #'},
  {title: 'Latvia', name:'lv', code:371, mask: '+### #'},
  {title: 'Lebanon', name:'lb', code:961, mask: '+### #'},
  {title: 'Lesotho', name:'ls', code:266, mask: '+### #'},
  {title: 'Liberia', name:'lr', code:231, mask: '+### #'},
  {title: 'Libya', name:'ly', code:218, mask: '+### #'},
  {title: 'Liechtenstein', name:'li', code:423, mask: '+### #'},
  {title: 'Lithuania', name:'lt', code:370, mask: '+### #'},
  {title: 'Luxembourg', name:'lu', code:352, mask: '+### #'},
  {title: 'Macau', name:'mo', code:853, mask: '+### #'},
  {title: 'Macedonia', name:'mk', code:389, mask: '+### #'},
  {title: 'Madagascar', name:'mg', code:261, mask: '+### #'},
  {title: 'Malawi', name:'mw', code:265, mask: '+### #'},
  {title: 'Malaysia', name:'my', code:60, mask: '+## #'},
  {title: 'Maldives', name:'mv', code:960, mask: '+### #'},
  {title: 'Mali', name:'ml', code:223, mask: '+### #'},
  {title: 'Malta', name:'mt', code:356, mask: '+### #'},
  {title: 'Marshall Islands', name:'mh', code:692, mask: '+### #'},
  {title: 'Mauritania', name:'mr', code:222, mask: '+### #'},
  {title: 'Mauritius', name:'mu', code:230, mask: '+### #'},
  {title: 'Mayotte', name:'yt', code:262, mask: '+### #'},
  {title: 'Mexico', name:'mx', code:52, mask: '+## #'},
  {title: 'Micronesia', name:'fm', code:691, mask: '+### #'},
  {title: 'Moldova', name:'md', code:373, mask: '+### #'},
  {title: 'Monaco', name:'mc', code:377, mask: '+### #'},
  {title: 'Mongolia', name:'mn', code:976, mask: '+### #'},
  {title: 'Montenegro', name:'me', code:382, mask: '+### #'},
  {title: 'Montserrat', name:'ms', code:1, mask: '+# ### #'},
  {title: 'Morocco', name:'ma', code:212, mask: '+### #'},
  {title: 'Mozambique', name:'mz', code:258, mask: '+### #'},
  {title: 'Namibia', name:'na', code:264, mask: '+### #'},
  {title: 'Nauru', name:'nr', code:674, mask: '+### #'},
  {title: 'Nepal', name:'np', code:977, mask: '+### #'},
  {title: 'Netherlands', name:'nl', code:31, mask: '+## #'},
  {title: 'Netherlands Antilles', name:'an', code:599, mask: '+### #'},
  {title: 'New Caledonia', name:'nc', code:687, mask: '+### #'},
  {title: 'New Zealand', name:'nz', code:64, mask: '+## #'},
  {title: 'Nicaragua', name:'ni', code:505, mask: '+### #'},
  {title: 'Niger', name:'ne', code:227, mask: '+### #'},
  {title: 'Nigeria', name:'ng', code:234, mask: '+### #'},
  {title: 'Niue', name:'nu', code:683, mask: '+### #'},
  {title: 'Norfolk Island', name:'', code:672, mask: '+### #'},
  {title: 'North Korea', name:'kp', code:850, mask: '+### #'},
  {title: 'Northern Mariana Islands', name:'mp', code:1, mask: '+# ### #'},
  {title: 'Norway', name:'no', code:47, mask: '+## #'},
  {title: 'Oman', name:'om', code:968, mask: '+### #'},
  {title: 'Pakistan', name:'pk', code:92, mask: '+## #'},
  {title: 'Palau', name:'pw', code:680, mask: '+### #'},
  {title: 'Panama', name:'pa', code:507, mask: '+### #'},
  {title: 'Papua New Guinea', name:'pg', code:675, mask: '+### #'},
  {title: 'Paraguay', name:'py', code:595, mask: '+### #'},
  {title: 'Peru', name:'pe', code:51, mask: '+## #'},
  {title: 'Philippines', name:'ph', code:63, mask: '+## #'},
  {title: 'Pitcairn Islands', name:'pn', code:870, mask: '+### #'},
  {title: 'Poland', name:'pl', code:48, mask: '+## #'},
  {title: 'Portugal', name:'pt', code:351, mask: '+### #'},
  {title: 'Puerto Rico', name:'pr', code:1, mask: '+# #'},
  {title: 'Qatar', name:'qa', code:974, mask: '+### #'},
  {title: 'Republic of the Congo', name:'cg', code:242, mask: '+### #'},
  {title: 'Romania', name:'ro', code:40, mask: '+## #'},
  {title: 'Russia', name:'ru', code:7, mask: '+# ### ###-##-##'},
  {title: 'Rwanda', name:'rw', code:250, mask: '+### #'},
  {title: 'Saint Barthelemy', name:'bl', code:590, mask: '+### #'},
  {title: 'Saint Helena', name:'sh', code:290, mask: '+### #'},
  {title: 'Saint Kitts and Nevis', name:'kn', code:1, mask: '+# ### #'},
  {title: 'Saint Lucia', name:'lc', code:1, mask: '+# ### #'},
  {title: 'Saint Martin', name:'mf', code:1, mask: '+# ### #'},
  {title: 'Saint Pierre and Miquelon', name:'pm', code:508, mask: '+### #'},
  {title: 'Saint Vincent and the Grenadines', name:'vc', code:1, mask: '+# ### #'},
  {title: 'Samoa', name:'ws', code:685, mask: '+### #'},
  {title: 'San Marino', name:'sm', code:378, mask: '+### #'},
  {title: 'Sao Tome and Principe', name:'st', code:239, mask: '+### #'},
  {title: 'Saudi Arabia', name:'sa', code:966, mask: '+### #'},
  {title: 'Senegal', name:'sn', code:221, mask: '+### #'},
  {title: 'Serbia', name:'rs', code:381, mask: '+### #'},
  {title: 'Seychelles', name:'sc', code:248, mask: '+### #'},
  {title: 'Sierra Leone', name:'sl', code:232, mask: '+### #'},
  {title: 'Singapore', name:'sg', code:65, mask: '+## #'},
  {title: 'Slovakia', name:'sk', code:421, mask: '+### #'},
  {title: 'Slovenia', name:'si', code:386, mask: '+### #'},
  {title: 'Solomon Islands', name:'sb', code:677, mask: '+### #'},
  {title: 'Somalia', name:'so', code:252, mask: '+### #'},
  {title: 'South Africa', name:'za', code:27, mask: '+## #'},
  {title: 'South Korea', name:'kr', code:82, mask: '+## #'},
  {title: 'Spain', name:'es', code:34, mask: '+## #'},
  {title: 'Sri Lanka', name:'lk', code:94, mask: '+## #'},
  {title: 'Sudan', name:'sd', code:249, mask: '+### #'},
  {title: 'Suriname', name:'sr', code:597, mask: '+### #'},
  {title: 'Svalbard', name:'sj', code:'x', mask: '+#'},
  {title: 'Swaziland', name:'sz', code:268, mask: '+### #'},
  {title: 'Sweden', name:'se', code:46, mask: '+## #'},
  {title: 'Switzerland', name:'ch', code:41, mask: '+## #'},
  {title: 'Syria', name:'sy', code:963, mask: '+### #'},
  {title: 'Taiwan', name:'tw', code:886, mask: '+### #'},
  {title: 'Tajikistan', name:'tj', code:992, mask: '+### #'},
  {title: 'Tanzania', name:'tz', code:255, mask: '+### #'},
  {title: 'Thailand', name:'th', code:66, mask: '+## #'},
  {title: 'Timor-Leste', name:'tl', code:670, mask: '+### #'},
  {title: 'Togo', name:'tg', code:228, mask: '+### #'},
  {title: 'Tokelau', name:'tk', code:690, mask: '+### #'},
  {title: 'Tonga', name:'to', code:676, mask: '+### #'},
  {title: 'Trinidad and Tobago', name:'tt', code:1, mask: '+# ### #'},
  {title: 'Tunisia', name:'tn', code:216, mask: '+### #'},
  {title: 'Turkey', name:'tr', code:90, mask: '+## #'},
  {title: 'Turkmenistan', name:'tm', code:993, mask: '+### #'},
  {title: 'Turks and Caicos Islands', name:'tc', code:1, mask: '+# ### #'},
  {title: 'Tuvalu', name:'tv', code:688, mask: '+### #'},
  {title: 'Uganda', name:'ug', code:256, mask: '+### #'},
  {title: 'Ukraine', name:'ua', code:380, mask: '+### #'},
  {title: 'United Arab Emirates', name:'ae', code:971, mask: '+### #'},
  {title: 'United Kingdom', name:'gb', code:44, mask: '+## #'},
  {title: 'United States', name:'us', code:1, mask: '+# #'},
  {title: 'Uruguay', name:'uy', code:598, mask: '+### #'},
  {title: 'US Virgin Islands', name:'vi', code:1, mask: '+# ### #'},
  {title: 'Uzbekistan', name:'uz', code:998, mask: '+### #'},
  {title: 'Vanuatu', name:'vu', code:678, mask: '+### #'},
  {title: 'Venezuela', name:'ve', code:58, mask: '+## #'},
  {title: 'Vietnam', name:'vn', code:84, mask: '+## #'},
  {title: 'Wallis and Futuna', name:'wf', code:681, mask: '+### #'},
  {title: 'West Bank', name:'', code:970, mask: '+### #'},
  {title: 'Western Sahara', name:'eh', code:'x', mask: '+#'},
  {title: 'Yemen', name:'ye', code:967, mask: '+### #'},
  {title: 'Zambia', name:'zm', code:260, mask: '+### #'},
  {title: 'Zimbabwe', name:'zw', code:263, mask: '+### #'}
]