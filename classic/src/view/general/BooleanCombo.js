/**
 * Classe que define a combo "boolean"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2020 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnussolution/magnusbilling7/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 10/07/2012
 */
Ext.define('MBilling.view.general.BooleanCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.booleancombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Active')],
        [0, t('Inactive')]
    ]
});
Ext.define('MBilling.view.general.ServicesTypeCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.servicestypecombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 'Custom',
    store: [
        ['disk_space', t('Disk space')],
        ['sipAccountLimit', t('Sip user limit')],
        ['calllimit', t('Call limit')],
        ['Custom', t('Custom')]
    ]
});
Ext.define('MBilling.view.general.TypeSipForward', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.typesipforwardcombo',
    fieldLabel: t('Forward'),
    forceSelection: true,
    editable: false,
    value: '',
    store: [
        ['', t('')],
        ['undefined', t('Undefined')],
        ['sip', t('SIP')],
        ['ivr', t('IVR')],
        ['queue', t('Queue')],
        ['group', t('Group')],
        ['number', t('Number')],
        ['hangup', t('Hangup')],
        ['custom', t('Custom')]
    ]
});
Ext.define('MBilling.view.general.TypeDestination', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.typedestinationcombo',
    fieldLabel: t('Type'),
    forceSelection: true,
    editable: false,
    value: '',
    store: [
        ['', t('')],
        ['undefined', t('Undefined')],
        ['sip', t('SIP')],
        ['ivr', t('IVR')],
        ['queue', t('Queue')],
        ['group', t('Group')],
        ['number', t('Number')],
        ['repeat', t('Repeat IVR')],
        ['hangup', t('Hangup')],
        ['custom', t('Custom')]
    ]
});
Ext.define('MBilling.view.general.PontoVirgula', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.pontovirgulacombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: ',',
    store: [
        [',', ', (' + t('Comma') + ')'],
        [';', '; (' + t('Semicolon') + ')']
    ]
});
Ext.define('MBilling.view.general.StatusCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.statuscombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Active')],
        [0, t('Inactivated')],
        [2, t('Pending')],
        [3, t('Sent')],
        [4, t('Blocked')],
        [5, t('AMD')]
    ]
});
Ext.define('MBilling.view.general.StatusUserCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.statususercombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Active')],
        [0, t('Inactivated')],
        [2, t('Pending')]
    ]
});
Ext.define('MBilling.view.general.CallbackCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.callbackcombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Active')],
        [2, t('Pending')],
        [3, t('Sent')],
        [4, t('Not working')]
    ]
});
Ext.define('MBilling.view.general.TypeNoYes', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.noyescombo',
    fieldLabel: t('Type paid'),
    forceSelection: true,
    editable: false,
    value: 0,
    store: [
        [0, t('No')],
        [1, t('Yes')]
    ]
});
Ext.define('MBilling.view.general.TypeYesNo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.yesnocombo',
    fieldLabel: t('Type paid'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [0, t('No')],
        [1, t('Yes')]
    ]
});
Ext.define('MBilling.view.general.TypeYesNoString', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.yesnostringcombo',
    fieldLabel: t('Type paid'),
    forceSelection: true,
    editable: false,
    value: 'yes',
    store: [
        ['no', t('No')],
        ['yes', t('Yes')]
    ]
});
Ext.define('MBilling.view.general.TypeNoYesString', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.noyesstringcombo',
    fieldLabel: t('Type paid'),
    forceSelection: true,
    editable: false,
    value: 'no',
    store: [
        ['no', t('No')],
        ['yes', t('Yes')]
    ]
});
Ext.define('MBilling.view.general.Typenumber', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.numbercombo',
    fieldLabel: t('Type number'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5]
    ]
});
Ext.define('MBilling.view.general.Typelanguage', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.languagecombo',
    fieldLabel: t('Language'),
    forceSelection: true,
    editable: false,
    value: 'en',
    store: [
        ['', t('Undefined')],
        ['br', t('Portuguese')],
        ['en', t('English')],
        ['es', t('Spanish')],
        ['ru', t('Russian')]
    ]
});
Ext.define('MBilling.view.general.TypeCampaign', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.campaigntypecombo',
    fieldLabel: t('Type'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Voice')],
        [0, t('SMS')]
    ]
});
Ext.define('MBilling.view.general.TypeFullCampaign', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.campaigntypefullcombo',
    fieldLabel: t('Type'),
    forceSelection: true,
    editable: false,
    value: 1,
    store: [
        [1, t('Voice')],
        [0, t('SMS')]
    ]
});
Ext.define('MBilling.view.general.TypeBoleto', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.boletocombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 'D',
    store: [
        ['D', t('No')],
        ['P', t('Yes')]
    ]
});
Ext.define('MBilling.view.general.RestrictionCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.restrictioncombo',
    fieldLabel: t('Status'),
    forceSelection: true,
    editable: false,
    value: 0,
    store: [
        [0, t('Inactive')],
        [1, t('Cannot call to restricted numbers')],
        [2, t('Only can call to restricted numbers')]
    ]
});
Ext.define('MBilling.view.general.CountryISOCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.countryisocombo',
    forceSelection: true,
    editable: false,
    listeners: {
        focus: function(combo) {
            combo.expand();
        }
    },
    store: [
        ['AFG', 'Afghanistan'],
        ['ALA', 'Åland Islands'],
        ['ALB', 'Albania'],
        ['DZA', 'Algeria'],
        ['ASM', 'American Samoa'],
        ['AND', 'Andorra'],
        ['AGO', 'Angola'],
        ['AIA', 'Anguilla'],
        ['ATA', 'Antarctica'],
        ['ATG', 'Antigua and Barbuda'],
        ['ARG', 'Argentina'],
        ['ARM', 'Armenia'],
        ['ABW', 'Aruba'],
        ['AUS', 'Australia'],
        ['AUT', 'Austria'],
        ['AZE', 'Azerbaijan'],
        ['BHS', 'Bahamas'],
        ['BHR', 'Bahrain'],
        ['BGD', 'Bangladesh'],
        ['BRB', 'Barbados'],
        ['BLR', 'Belarus'],
        ['BEL', 'Belgium'],
        ['BLZ', 'Belize'],
        ['BEN', 'Benin'],
        ['BMU', 'Bermuda'],
        ['BTN', 'Bhutan'],
        ['BOL', 'Bolivia, Plurinational State of'],
        ['BES', 'Bonaire, Sint Eustatius and Saba'],
        ['BIH', 'Bosnia and Herzegovina'],
        ['BWA', 'Botswana'],
        ['BVT', 'Bouvet Island'],
        ['BRL', 'Brazil'],
        ['IOT', 'British Indian Ocean Territory'],
        ['BRN', 'Brunei Darussalam'],
        ['BGR', 'Bulgaria'],
        ['BFA', 'Burkina Faso'],
        ['BDI', 'Burundi'],
        ['KHM', 'Cambodia'],
        ['CMR', 'Cameroon'],
        ['CAN', 'Canada'],
        ['CPV', 'Cape Verde'],
        ['CYM', 'Cayman Islands'],
        ['CAF', 'Central African Republic'],
        ['TCD', 'Chad'],
        ['CHL', 'Chile'],
        ['CHN', 'China'],
        ['CXR', 'Christmas Island'],
        ['CCK', 'Cocos (Keeling) Islands'],
        ['COL', 'Colombia'],
        ['COM', 'Comoros'],
        ['COG', 'Congo'],
        ['COD', 'Congo, the Democratic Republic of the'],
        ['COK', 'Cook Islands'],
        ['CRI', 'Costa Rica'],
        ['CIV', 'Côte dIvoire'],
        ['HRV', 'Croatia'],
        ['CUB', 'Cuba'],
        ['CUW', 'Curaçao'],
        ['CYP', 'Cyprus'],
        ['CZE', 'Czech Republic'],
        ['DNK', 'Denmark'],
        ['DJI', 'Djibouti'],
        ['DMA', 'Dominica'],
        ['DOM', 'Dominican Republic'],
        ['ECU', 'Ecuador'],
        ['EGY', 'Egypt'],
        ['SLV', 'El Salvador'],
        ['GNQ', 'Equatorial Guinea'],
        ['ERI', 'Eritrea'],
        ['EST', 'Estonia'],
        ['ETH', 'Ethiopia'],
        ['FLK', 'Falkland Islands (Malvinas)'],
        ['FRO', 'Faroe Islands'],
        ['FJI', 'Fiji'],
        ['FIN', 'Finland'],
        ['FRA', 'France'],
        ['GUF', 'French Guiana'],
        ['PYF', 'French Polynesia'],
        ['ATF', 'French Southern Territories'],
        ['GAB', 'Gabon'],
        ['GMB', 'Gambia'],
        ['GEO', 'Georgia'],
        ['DEU', 'Germany'],
        ['GHA', 'Ghana'],
        ['GIB', 'Gibraltar'],
        ['GRC', 'Greece'],
        ['GRL', 'Greenland'],
        ['GRD', 'Grenada'],
        ['GLP', 'Guadeloupe'],
        ['GUM', 'Guam'],
        ['GTM', 'Guatemala'],
        ['GGY', 'Guernsey'],
        ['GIN', 'Guinea'],
        ['GNB', 'Guinea-Bissau'],
        ['GUY', 'Guyana'],
        ['HTI', 'Haiti'],
        ['HMD', 'Heard Island and McDonald Islands'],
        ['VAT', 'Holy See (Vatican City State)'],
        ['HND', 'Honduras'],
        ['HKG', 'Hong Kong'],
        ['HUN', 'Hungary'],
        ['ISL', 'Iceland'],
        ['IND', 'India'],
        ['IDN', 'Indonesia'],
        ['IRN', 'Iran, Islamic Republic of'],
        ['IRQ', 'Iraq'],
        ['IRL', 'Ireland'],
        ['IMN', 'Isle of Man'],
        ['ISR', 'Israel'],
        ['ITA', 'Italy'],
        ['JAM', 'Jamaica'],
        ['JPN', 'Japan'],
        ['JEY', 'Jersey'],
        ['JOR', 'Jordan'],
        ['KAZ', 'Kazakhstan'],
        ['KEN', 'Kenya'],
        ['KIR', 'Kiribati'],
        ['PRK', 'Korea, Democratic Peoples Republic of'],
        ['KOR', 'Korea, Republic of'],
        ['KWT', 'Kuwait'],
        ['KGZ', 'Kyrgyzstan'],
        ['LAO', 'Lao Peoples Democratic Republic'],
        ['LVA', 'Latvia'],
        ['LBN', 'Lebanon'],
        ['LSO', 'Lesotho'],
        ['LBR', 'Liberia'],
        ['LBY', 'Libya'],
        ['LIE', 'Liechtenstein'],
        ['LTU', 'Lithuania'],
        ['LUX', 'Luxembourg'],
        ['MAC', 'Macao'],
        ['MKD', 'Macedonia, the former Yugoslav Republic of'],
        ['MDG', 'Madagascar'],
        ['MWI', 'Malawi'],
        ['MYS', 'Malaysia'],
        ['MDV', 'Maldives'],
        ['MLI', 'Mali'],
        ['MLT', 'Malta'],
        ['MHL', 'Marshall Islands'],
        ['MTQ', 'Martinique'],
        ['MRT', 'Mauritania'],
        ['MUS', 'Mauritius'],
        ['MYT', 'Mayotte'],
        ['MEX', 'Mexico'],
        ['FSM', 'Micronesia, Federated States of'],
        ['MDA', 'Moldova, Republic of'],
        ['MCO', 'Monaco'],
        ['MNG', 'Mongolia'],
        ['MNE', 'Montenegro'],
        ['MSR', 'Montserrat'],
        ['MAR', 'Morocco'],
        ['MOZ', 'Mozambique'],
        ['MMR', 'Myanmar'],
        ['NAM', 'Namibia'],
        ['NRU', 'Nauru'],
        ['NPL', 'Nepal'],
        ['NLD', 'Netherlands'],
        ['NCL', 'New Caledonia'],
        ['NZL', 'New Zealand'],
        ['NIC', 'Nicaragua'],
        ['NER', 'Niger'],
        ['NGA', 'Nigeria'],
        ['NIU', 'Niue'],
        ['NFK', 'Norfolk Island'],
        ['MNP', 'Northern Mariana Islands'],
        ['NOR', 'Norway'],
        ['OMN', 'Oman'],
        ['PAK', 'Pakistan'],
        ['PLW', 'Palau'],
        ['PSE', 'Palestinian Territory, Occupied'],
        ['PAN', 'Panama'],
        ['PNG', 'Papua New Guinea'],
        ['PRY', 'Paraguay'],
        ['PER', 'Peru'],
        ['PHL', 'Philippines'],
        ['PCN', 'Pitcairn'],
        ['POL', 'Poland'],
        ['PRT', 'Portugal'],
        ['PRI', 'Puerto Rico'],
        ['QAT', 'Qatar'],
        ['REU', 'Réunion'],
        ['ROU', 'Romania'],
        ['RUS', 'Russian Federation'],
        ['RWA', 'Rwanda'],
        ['BLM', 'Saint Barthélemy'],
        ['SHN', 'Saint Helena, Ascension and Tristan da Cunha'],
        ['KNA', 'Saint Kitts and Nevis'],
        ['LCA', 'Saint Lucia'],
        ['MAF', 'Saint Martin (French part)'],
        ['SPM', 'Saint Pierre and Miquelon'],
        ['VCT', 'Saint Vincent and the Grenadines'],
        ['WSM', 'Samoa'],
        ['SMR', 'San Marino'],
        ['STP', 'Sao Tome and Principe'],
        ['SAU', 'Saudi Arabia'],
        ['SEN', 'Senegal'],
        ['SRB', 'Serbia'],
        ['SYC', 'Seychelles'],
        ['SLE', 'Sierra Leone'],
        ['SGP', 'Singapore'],
        ['SXM', 'Sint Maarten (Dutch part)'],
        ['SVK', 'Slovakia'],
        ['SVN', 'Slovenia'],
        ['SLB', 'Solomon Islands'],
        ['SOM', 'Somalia'],
        ['ZAF', 'South Africa'],
        ['SGS', 'South Georgia and the South Sandwich Islands'],
        ['SSD', 'South Sudan'],
        ['ESP', 'Spain'],
        ['LKA', 'Sri Lanka'],
        ['SDN', 'Sudan'],
        ['SUR', 'Suriname'],
        ['SJM', 'Svalbard and Jan Mayen'],
        ['SWZ', 'Swaziland'],
        ['SWE', 'Sweden'],
        ['CHE', 'Switzerland'],
        ['SYR', 'Syrian Arab Republic'],
        ['TWN', 'Taiwan, Province of China'],
        ['TJK', 'Tajikistan'],
        ['TZA', 'Tanzania, United Republic of'],
        ['THA', 'Thailand'],
        ['TLS', 'Timor-Leste'],
        ['TGO', 'Togo'],
        ['TKL', 'Tokelau'],
        ['TON', 'Tonga'],
        ['TTO', 'Trinidad and Tobago'],
        ['TUN', 'Tunisia'],
        ['TUR', 'Turkey'],
        ['TKM', 'Turkmenistan'],
        ['TCA', 'Turks and Caicos Islands'],
        ['TUV', 'Tuvalu'],
        ['UGA', 'Uganda'],
        ['UKR', 'Ukraine'],
        ['ARE', 'United Arab Emirates'],
        ['GBR', 'United Kingdom'],
        ['USA', 'United States'],
        ['UMI', 'United States Minor Outlying Islands'],
        ['URY', 'Uruguay'],
        ['UZB', 'Uzbekistan'],
        ['VUT', 'Vanuatu'],
        ['VEN', 'Venezuela, Bolivarian Republic of'],
        ['VNM', 'Viet Nam'],
        ['VGB', 'Virgin Islands, British'],
        ['VIR', 'Virgin Islands, U.S.'],
        ['WLF', 'Wallis and Futuna'],
        ['ESH', 'Western Sahara'],
        ['YEM', 'Yemen'],
        ['ZMB', 'Zambia'],
        ['ZWE', 'Zimbabwe']
    ]
});
Ext.define('MBilling.view.general.CountryCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.countrycombo',
    fieldLabel: t('Country'),
    forceSelection: true,
    editable: true,
    allowBlank: true,
    listeners: {
        focus: function(combo) {
            combo.expand();
        }
    },
    store: [
        ['', t('Select')],
        ['93', 'Afghanistan'],
        ['355', 'Albania'],
        ['213', 'Algeria'],
        ['684', 'American Samoa'],
        ['376', 'Andorra'],
        ['244', 'Angola'],
        ['1264', 'Anguilla'],
        ['672', 'Antarctica'],
        ['1268', 'Antigua And Barbuda'],
        ['54', 'Argentina'],
        ['374', 'Armenia'],
        ['297', 'Aruba'],
        ['61', 'Australia'],
        ['43', 'Austria'],
        ['994', 'Azerbaijan'],
        ['1242', 'Bahamas'],
        ['973', 'Bahrain'],
        ['880', 'Bangladesh'],
        ['1246', 'Barbados'],
        ['375', 'Belarus'],
        ['32', 'Belgium'],
        ['501', 'Belize'],
        ['229', 'Benin'],
        ['1441', 'Bermuda'],
        ['975', 'Bhutan'],
        ['591', 'Bolivia'],
        ['387', 'Bosnia And Herzegovina'],
        ['267', 'Botswana'],
        ['55', 'Brazil'],
        ['1284', 'British Indian Ocean Territory'],
        ['673', 'Brunei Darussalam'],
        ['359', 'Bulgaria'],
        ['226', 'Burkina Faso'],
        ['257', 'Burundi'],
        ['855', 'Cambodia'],
        ['237', 'Cameroon'],
        ['238', 'Cape Verde'],
        ['1345', 'Cayman Islands'],
        ['236', 'Central African Republic'],
        ['235', 'Chad'],
        ['56', 'Chile'],
        ['86', 'China'],
        ['618', 'Christmas Island'],
        ['61', 'Cocos (Keeling); Islands'],
        ['57', 'Colombia'],
        ['269', 'Comoros'],
        ['242', 'Congo'],
        ['243', 'Congo, The Democratic Republic Of The'],
        ['682', 'Cook Islands'],
        ['506', 'Costa Rica'],
        ['385', 'Croatia'],
        ['53', 'Cuba'],
        ['357', 'Cyprus'],
        ['420', 'Czech Republic'],
        ['45', 'Denmark'],
        ['253', 'Djibouti'],
        ['1767', 'Dominica'],
        ['1809', 'Dominican Republic'],
        ['593', 'Ecuador'],
        ['20', 'Egypt'],
        ['503', 'El Salvador'],
        ['240', 'Equatorial Guinea'],
        ['291', 'Eritrea'],
        ['372', 'Estonia'],
        ['251', 'Ethiopia'],
        ['500', 'Falkland Islands (Malvinas)'],
        ['298', 'Faroe Islands'],
        ['679', 'Fiji'],
        ['358', 'Finland'],
        ['33', 'France'],
        ['596', 'French Guiana'],
        ['594', 'French Polynesia'],
        ['689', 'French Southern Territories'],
        ['241', 'Gabon'],
        ['220', 'Gambia'],
        ['995', 'Georgia'],
        ['49', 'Germany'],
        ['233', 'Ghana'],
        ['350', 'Gibraltar'],
        ['30', 'Greece'],
        ['299', 'Greenland'],
        ['1473', 'Grenada'],
        ['590', 'Guadeloupe'],
        ['1671', 'Guam'],
        ['502', 'Guatemala'],
        ['224', 'Guinea'],
        ['245', 'Guinea-Bissau'],
        ['592', 'Guyana'],
        ['509', 'Haiti'],
        ['504', 'Honduras'],
        ['852', 'Hong Kong'],
        ['36', 'Hungary'],
        ['354', 'Iceland'],
        ['91', 'India'],
        ['62', 'Indonesia'],
        ['98', 'Iran, Islamic Republic Of'],
        ['964', 'Iraq'],
        ['353', 'Ireland'],
        ['972', 'Israel'],
        ['39', 'Italy'],
        ['1876', 'Jamaica'],
        ['81', 'Japan'],
        ['962', 'Jordan'],
        ['77', 'Kazakhstan'],
        ['254', 'Kenya'],
        ['686', 'Kiribati'],
        ['850', 'Korea, Democratic Peoples Republic Of'],
        ['82', 'Korea, Republic of'],
        ['965', 'Kuwait'],
        ['996', 'Kyrgyzstan'],
        ['856', 'Lao Peoples Democratic Republic'],
        ['371', 'Latvia'],
        ['961', 'Lebanon'],
        ['266', 'Lesotho'],
        ['231', 'Liberia'],
        ['218', 'Libyan Arab Jamahiriya'],
        ['423', 'Liechtenstein'],
        ['370', 'Lithuania'],
        ['352', 'Luxembourg'],
        ['853', 'Macao'],
        ['389', 'Macedonia, The Former Yugoslav Republic Of'],
        ['261', 'Madagascar'],
        ['265', 'Malawi'],
        ['60', 'Malaysia'],
        ['960', 'Maldives'],
        ['223', 'Mali'],
        ['356', 'Malta'],
        ['692', 'Marshall islands'],
        ['596', 'Martinique'],
        ['222', 'Mauritania'],
        ['230', 'Mauritius'],
        ['269', 'Mayotte'],
        ['52', 'Mexico'],
        ['691', 'Micronesia, Federated States Of'],
        ['1808', 'Moldova, Republic Of'],
        ['377', 'Monaco'],
        ['976', 'Mongolia'],
        ['1664', 'Montserrat'],
        ['212', 'Morocco'],
        ['258', 'Mozambique'],
        ['95', 'Myanmar'],
        ['264', 'Namibia'],
        ['674', 'Nauru'],
        ['977', 'Nepal'],
        ['31', 'Netherlands'],
        ['599', 'Netherlands Antilles'],
        ['687', 'New Caledonia'],
        ['64', 'New Zealand'],
        ['505', 'Nicaragua'],
        ['227', 'Niger'],
        ['234', 'Nigeria'],
        ['683', 'Niue'],
        ['672', 'Norfolk Island'],
        ['1670', 'Northern Mariana Islands'],
        ['47', 'Norway'],
        ['968', 'Oman'],
        ['92', 'Pakistan'],
        ['680', 'Palau'],
        ['970', 'Palestinian Territory, Occupied'],
        ['507', 'Panama'],
        ['675', 'Papua New Guinea'],
        ['595', 'Paraguay'],
        ['51', 'Peru'],
        ['63', 'Philippines'],
        ['48', 'Poland'],
        ['351', 'Portugal'],
        ['1787', 'Puerto Rico'],
        ['974', 'Qatar'],
        ['262', 'Reunion'],
        ['40', 'Romania'],
        ['7', 'Russian Federation'],
        ['250', 'Rwanda'],
        ['290', 'SaINT Helena'],
        ['1869', 'SaINT Kitts And Nevis'],
        ['1758', 'SaINT Lucia'],
        ['508', 'SaINT Pierre And Miquelon'],
        ['1784', 'SaINT Vincent And The Grenadines'],
        ['685', 'Samoa'],
        ['378', 'San Marino'],
        ['239', 'SÃ£o TomÃ© And Principe'],
        ['966', 'Saudi Arabia'],
        ['221', 'Senegal'],
        ['248', 'Seychelles'],
        ['232', 'Sierra Leone'],
        ['65', 'Singapore'],
        ['421', 'Slovakia'],
        ['386', 'Slovenia'],
        ['677', 'Solomon Islands'],
        ['252', 'Somalia'],
        ['27', 'South Africa'],
        ['34', 'Spain'],
        ['94', 'Sri Lanka'],
        ['249', 'Sudan'],
        ['597', 'Suriname'],
        ['268', 'Swaziland'],
        ['46', 'Sweden'],
        ['41', 'Switzerland'],
        ['963', 'Syrian Arab Republic'],
        ['886', 'Taiwan, Province Of China'],
        ['992', 'Tajikistan'],
        ['255', 'Tanzania, United Republic Of'],
        ['66', 'Thailand'],
        ['670', 'Timor-Leste'],
        ['228', 'Togo'],
        ['690', 'Tokelau'],
        ['676', 'Tonga'],
        ['1868', 'Trinidad And Tobago'],
        ['216', 'Tunisia'],
        ['90', 'Turkey'],
        ['993', 'Turkmenistan'],
        ['1649', 'Turks And Caicos Islands'],
        ['688', 'Tuvalu'],
        ['256', 'Uganda'],
        ['380', 'Ukraine'],
        ['971', 'United Arab Emirates'],
        ['44', 'United Kingdom'],
        ['1', 'United States/Canada'],
        ['598', 'Uruguay'],
        ['998', 'Uzbekistan'],
        ['678', 'Vanuatu'],
        ['58', 'Venezuela'],
        ['84', 'Vietnam'],
        ['1284', 'Virgin Islands, British'],
        ['808', 'Virgin Islands, U.S.'],
        ['681', 'Wallis And Futuna'],
        ['967', 'Yemen'],
        ['260', 'Zambia'],
        ['263', 'Zimbabwe'],
        ['35818', 'Aland Islands'],
        ['441481', 'Guernsey'],
        ['441624', 'Isle of Man'],
        ['441534', 'Jersey'],
        ['382', 'Montenegro, Republic of'],
        ['381', 'Serbia, Republic of']
    ]
});