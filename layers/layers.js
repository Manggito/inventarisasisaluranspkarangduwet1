var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_1 = new ol.format.GeoJSON();
var features_Sungai_1 = format_Sungai_1.readFeatures(json_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_1.addFeatures(features_Sungai_1);
var lyr_Sungai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_1, 
                style: style_Sungai_1,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_1.png" /> Sungai'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_AreaFungsional_3 = new ol.format.GeoJSON();
var features_AreaFungsional_3 = format_AreaFungsional_3.readFeatures(json_AreaFungsional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaFungsional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaFungsional_3.addFeatures(features_AreaFungsional_3);
var lyr_AreaFungsional_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaFungsional_3, 
                style: style_AreaFungsional_3,
                popuplayertitle: 'Area Fungsional',
                interactive: true,
                title: '<img src="styles/legend/AreaFungsional_3.png" /> Area Fungsional'
            });
var format_JalurPipa_4 = new ol.format.GeoJSON();
var features_JalurPipa_4 = format_JalurPipa_4.readFeatures(json_JalurPipa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurPipa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurPipa_4.addFeatures(features_JalurPipa_4);
var lyr_JalurPipa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurPipa_4, 
                style: style_JalurPipa_4,
                popuplayertitle: 'Jalur Pipa',
                interactive: true,
                title: '<img src="styles/legend/JalurPipa_4.png" /> Jalur Pipa'
            });
var format_KETERANGANKERUSAKANSALURAN_5 = new ol.format.GeoJSON();
var features_KETERANGANKERUSAKANSALURAN_5 = format_KETERANGANKERUSAKANSALURAN_5.readFeatures(json_KETERANGANKERUSAKANSALURAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KETERANGANKERUSAKANSALURAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KETERANGANKERUSAKANSALURAN_5.addFeatures(features_KETERANGANKERUSAKANSALURAN_5);
var lyr_KETERANGANKERUSAKANSALURAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KETERANGANKERUSAKANSALURAN_5, 
                style: style_KETERANGANKERUSAKANSALURAN_5,
                popuplayertitle: 'KETERANGAN KERUSAKAN SALURAN',
                interactive: true,
    title: 'KETERANGAN KERUSAKAN SALURAN<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_5_0.png" /> Baik<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_5_1.png" /> Rusak Ringan<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_5_2.png" /> Rusak Sedang<br />\
    <img src="styles/legend/KETERANGANKERUSAKANSALURAN_5_3.png" /> Rusak Berat<br />' });
var format_JENISSALURAN_6 = new ol.format.GeoJSON();
var features_JENISSALURAN_6 = format_JENISSALURAN_6.readFeatures(json_JENISSALURAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISSALURAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISSALURAN_6.addFeatures(features_JENISSALURAN_6);
var lyr_JENISSALURAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISSALURAN_6, 
                style: style_JENISSALURAN_6,
                popuplayertitle: 'JENIS SALURAN',
                interactive: true,
    title: 'JENIS SALURAN<br />\
    <img src="styles/legend/JENISSALURAN_6_0.png" /> Saluran Sekunder<br />' });
var format_AREA_NOMENKLATUR_7 = new ol.format.GeoJSON();
var features_AREA_NOMENKLATUR_7 = format_AREA_NOMENKLATUR_7.readFeatures(json_AREA_NOMENKLATUR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_NOMENKLATUR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_NOMENKLATUR_7.addFeatures(features_AREA_NOMENKLATUR_7);
var lyr_AREA_NOMENKLATUR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_NOMENKLATUR_7, 
                style: style_AREA_NOMENKLATUR_7,
                popuplayertitle: 'AREA_NOMENKLATUR',
                interactive: true,
                title: '<img src="styles/legend/AREA_NOMENKLATUR_7.png" /> AREA_NOMENKLATUR'
            });
var format_BANGUNAN_NOMENKLATUR_8 = new ol.format.GeoJSON();
var features_BANGUNAN_NOMENKLATUR_8 = format_BANGUNAN_NOMENKLATUR_8.readFeatures(json_BANGUNAN_NOMENKLATUR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_NOMENKLATUR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_NOMENKLATUR_8.addFeatures(features_BANGUNAN_NOMENKLATUR_8);
var lyr_BANGUNAN_NOMENKLATUR_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_NOMENKLATUR_8, 
                style: style_BANGUNAN_NOMENKLATUR_8,
                popuplayertitle: 'BANGUNAN_NOMENKLATUR',
                interactive: false,
                title: '<img src="styles/legend/BANGUNAN_NOMENKLATUR_8.png" /> BANGUNAN_NOMENKLATUR'
            });
var format_Tikungan_9 = new ol.format.GeoJSON();
var features_Tikungan_9 = format_Tikungan_9.readFeatures(json_Tikungan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikungan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikungan_9.addFeatures(features_Tikungan_9);
var lyr_Tikungan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikungan_9, 
                style: style_Tikungan_9,
                popuplayertitle: 'Tikungan',
                interactive: true,
                title: '<img src="styles/legend/Tikungan_9.png" /> Tikungan'
            });
var format_Gorong__Gorong_10 = new ol.format.GeoJSON();
var features_Gorong__Gorong_10 = format_Gorong__Gorong_10.readFeatures(json_Gorong__Gorong_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gorong__Gorong_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gorong__Gorong_10.addFeatures(features_Gorong__Gorong_10);
var lyr_Gorong__Gorong_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gorong__Gorong_10, 
                style: style_Gorong__Gorong_10,
                popuplayertitle: 'Gorong_-_Gorong',
                interactive: true,
                title: '<img src="styles/legend/Gorong__Gorong_10.png" /> Gorong_-_Gorong'
            });
var format_Titik_Per_50_m_11 = new ol.format.GeoJSON();
var features_Titik_Per_50_m_11 = format_Titik_Per_50_m_11.readFeatures(json_Titik_Per_50_m_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Per_50_m_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Per_50_m_11.addFeatures(features_Titik_Per_50_m_11);
var lyr_Titik_Per_50_m_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Per_50_m_11, 
                style: style_Titik_Per_50_m_11,
                popuplayertitle: 'Titik_Per_50_m',
                interactive: true,
                title: '<img src="styles/legend/Titik_Per_50_m_11.png" /> Titik_Per_50_m'
            });
var format_Box_Alva_Valve_12 = new ol.format.GeoJSON();
var features_Box_Alva_Valve_12 = format_Box_Alva_Valve_12.readFeatures(json_Box_Alva_Valve_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Box_Alva_Valve_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Box_Alva_Valve_12.addFeatures(features_Box_Alva_Valve_12);
var lyr_Box_Alva_Valve_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Box_Alva_Valve_12, 
                style: style_Box_Alva_Valve_12,
                popuplayertitle: 'Box_Alva_Valve',
                interactive: true,
                title: '<img src="styles/legend/Box_Alva_Valve_12.png" /> Box_Alva_Valve'
            });
var format_Bangunan_Bagi_13 = new ol.format.GeoJSON();
var features_Bangunan_Bagi_13 = format_Bangunan_Bagi_13.readFeatures(json_Bangunan_Bagi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Bagi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Bagi_13.addFeatures(features_Bangunan_Bagi_13);
var lyr_Bangunan_Bagi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Bagi_13, 
                style: style_Bangunan_Bagi_13,
                popuplayertitle: 'Bangunan_Bagi',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Bagi_13.png" /> Bangunan_Bagi'
            });
var format_Bangunan_Sadap_14 = new ol.format.GeoJSON();
var features_Bangunan_Sadap_14 = format_Bangunan_Sadap_14.readFeatures(json_Bangunan_Sadap_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_Sadap_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_Sadap_14.addFeatures(features_Bangunan_Sadap_14);
var lyr_Bangunan_Sadap_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_Sadap_14, 
                style: style_Bangunan_Sadap_14,
                popuplayertitle: 'Bangunan_Sadap',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_Sadap_14.png" /> Bangunan_Sadap'
            });
var format_Rumah_Pompa_15 = new ol.format.GeoJSON();
var features_Rumah_Pompa_15 = format_Rumah_Pompa_15.readFeatures(json_Rumah_Pompa_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_Pompa_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_Pompa_15.addFeatures(features_Rumah_Pompa_15);
var lyr_Rumah_Pompa_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_Pompa_15, 
                style: style_Rumah_Pompa_15,
                popuplayertitle: 'Rumah_Pompa',
                interactive: true,
                title: '<img src="styles/legend/Rumah_Pompa_15.png" /> Rumah_Pompa'
            });
var group_TITIKAKSESORIS = new ol.layer.Group({
                                layers: [lyr_Box_Alva_Valve_12,lyr_Bangunan_Bagi_13,lyr_Bangunan_Sadap_14,lyr_Rumah_Pompa_15,],
                                fold: 'open',
                                title: 'TITIK AKSESORIS'});
var group_TITIKKETERANGAN = new ol.layer.Group({
                                layers: [lyr_Tikungan_9,lyr_Gorong__Gorong_10,lyr_Titik_Per_50_m_11,],
                                fold: 'open',
                                title: 'TITIK KETERANGAN'});
var group_SKEMANOMENKLATUR = new ol.layer.Group({
                                layers: [lyr_AREA_NOMENKLATUR_7,lyr_BANGUNAN_NOMENKLATUR_8,],
                                fold: 'open',
                                title: 'SKEMA NOMENKLATUR'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Sungai_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_AreaFungsional_3.setVisible(true);lyr_JalurPipa_4.setVisible(true);lyr_KETERANGANKERUSAKANSALURAN_5.setVisible(true);lyr_JENISSALURAN_6.setVisible(true);lyr_AREA_NOMENKLATUR_7.setVisible(true);lyr_BANGUNAN_NOMENKLATUR_8.setVisible(true);lyr_Tikungan_9.setVisible(true);lyr_Gorong__Gorong_10.setVisible(true);lyr_Titik_Per_50_m_11.setVisible(true);lyr_Box_Alva_Valve_12.setVisible(true);lyr_Bangunan_Bagi_13.setVisible(true);lyr_Bangunan_Sadap_14.setVisible(true);lyr_Rumah_Pompa_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Sungai_1,lyr_Jalan_2,lyr_AreaFungsional_3,lyr_JalurPipa_4,lyr_KETERANGANKERUSAKANSALURAN_5,lyr_JENISSALURAN_6,group_SKEMANOMENKLATUR,group_TITIKKETERANGAN,group_TITIKAKSESORIS];
lyr_Sungai_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AreaFungsional_3.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_JalurPipa_4.set('fieldAliases', {'Id': 'Id', });
lyr_KETERANGANKERUSAKANSALURAN_5.set('fieldAliases', {'KATEGORI': 'KATEGORI', 'KETERANGAN': 'KETERANGAN', 'PANJANG': 'PANJANG', });
lyr_JENISSALURAN_6.set('fieldAliases', {'JENIS': 'JENIS', 'PANJANG': 'PANJANG', });
lyr_AREA_NOMENKLATUR_7.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'SATUAN': 'SATUAN', 'PEMBAGIAN': 'PEMBAGIAN', 'AREA': 'AREA', });
lyr_BANGUNAN_NOMENKLATUR_8.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', 'URUTAN': 'URUTAN', 'PEMBAGIAN': 'PEMBAGIAN', });
lyr_Tikungan_9.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Gorong__Gorong_10.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Titik_Per_50_m_11.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Box_Alva_Valve_12.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Bagi_13.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Bangunan_Sadap_14.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Rumah_Pompa_15.set('fieldAliases', {'NAME': 'NAME', 'Descriptio': 'Descriptio', 'pdfmaps_ph': 'pdfmaps_ph', 'X': 'X', 'Y': 'Y', 'BUJUR': 'BUJUR', 'LINTANG': 'LINTANG', 'PANJANG': 'PANJANG', 'FOTO_1': 'FOTO_1', 'FOTO_2': 'FOTO_2', 'FOTO_3': 'FOTO_3', 'FOTO_4': 'FOTO_4', 'FOTO_5': 'FOTO_5', 'FOTO_6': 'FOTO_6', 'FOTO_7': 'FOTO_7', 'FOTO_8': 'FOTO_8', });
lyr_Sungai_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AreaFungsional_3.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_JalurPipa_4.set('fieldImages', {'Id': 'Range', });
lyr_KETERANGANKERUSAKANSALURAN_5.set('fieldImages', {'KATEGORI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_JENISSALURAN_6.set('fieldImages', {'JENIS': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_AREA_NOMENKLATUR_7.set('fieldImages', {'Id': 'Range', 'LUAS': 'TextEdit', 'SATUAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BANGUNAN_NOMENKLATUR_8.set('fieldImages', {'Id': 'Range', 'NAME': 'TextEdit', 'URUTAN': 'TextEdit', 'PEMBAGIAN': 'TextEdit', });
lyr_Tikungan_9.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Gorong__Gorong_10.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Titik_Per_50_m_11.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Box_Alva_Valve_12.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Bagi_13.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Bangunan_Sadap_14.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Rumah_Pompa_15.set('fieldImages', {'NAME': 'TextEdit', 'Descriptio': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'BUJUR': 'TextEdit', 'LINTANG': 'TextEdit', 'PANJANG': 'TextEdit', 'FOTO_1': 'ExternalResource', 'FOTO_2': 'ExternalResource', 'FOTO_3': 'ExternalResource', 'FOTO_4': 'ExternalResource', 'FOTO_5': 'ExternalResource', 'FOTO_6': 'ExternalResource', 'FOTO_7': 'ExternalResource', 'FOTO_8': 'ExternalResource', });
lyr_Sungai_1.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AreaFungsional_3.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'hidden field', 'AREA': 'inline label - visible with data', });
lyr_JalurPipa_4.set('fieldLabels', {'Id': 'hidden field', });
lyr_KETERANGANKERUSAKANSALURAN_5.set('fieldLabels', {'KATEGORI': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_JENISSALURAN_6.set('fieldLabels', {'JENIS': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', });
lyr_AREA_NOMENKLATUR_7.set('fieldLabels', {'Id': 'hidden field', 'LUAS': 'inline label - visible with data', 'SATUAN': 'inline label - visible with data', 'PEMBAGIAN': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_BANGUNAN_NOMENKLATUR_8.set('fieldLabels', {'Id': 'no label', 'NAME': 'no label', 'URUTAN': 'no label', 'PEMBAGIAN': 'no label', });
lyr_Tikungan_9.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Gorong__Gorong_10.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - always visible', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Titik_Per_50_m_11.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Box_Alva_Valve_12.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Bagi_13.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Bangunan_Sadap_14.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_15.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Descriptio': 'hidden field', 'pdfmaps_ph': 'hidden field', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'BUJUR': 'inline label - visible with data', 'LINTANG': 'inline label - visible with data', 'PANJANG': 'inline label - visible with data', 'FOTO_1': 'no label', 'FOTO_2': 'no label', 'FOTO_3': 'no label', 'FOTO_4': 'no label', 'FOTO_5': 'no label', 'FOTO_6': 'no label', 'FOTO_7': 'no label', 'FOTO_8': 'no label', });
lyr_Rumah_Pompa_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});