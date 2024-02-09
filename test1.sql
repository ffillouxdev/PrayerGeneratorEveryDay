-- Tableau : myapp_audio
CREATE TABLE IF NOT EXISTS myapp_audio (id integer NOT NULL PRIMARY KEY AUTOINCREMENT, audioName varchar(150) NOT NULL, audioUrl varchar(100) NOT NULL, imgAudioUrl varchar(100) NOT NULL, historyOfAudio varchar(350) NOT NULL, author varchar(100) NOT NULL);
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (1, 'Ave Maria', 'assets/audio/AveMaria.mp3', 'assets/marie_45thxzO.jpg', 'Ave Maria est une prière dédiée à la Vierge Marie, la mère de Jésus dans la tradition chrétienne. La prière est une salutation angélique adressée à Marie, basée sur les paroles de l''ange Gabriel lors de l''Annonciation. L''hymne exprime la dévotion envers Marie en la louant et en demandant son intercession. La mélodie évoque un sentiment de grâce et de spiritualité. L''Ave Maria est souvent interprétée lors de cérémonies religieuses, mariages et événements spéciaux, transcendant les frontières culturelles pour devenir un symbole universel de piété.', 'Franz Schubert');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (2, 'Messe de Saint Jean - Sanctus', 'assets/audio/sanctus_ILvwwuV.mp3', 'assets/Sanctus_GQ1daRB.jpg', 'Le "Sanctus" de la Messe de Saint Jean de Charles Gounod est une pièce liturgique sacrée du XIXe siècle. Intégré au Gloria, il célèbre la sainteté divine au cœur de la messe. Gounod, compositeur français, offre une composition sobre et spirituelle, enrichissant la liturgie catholique par sa musique. La pièce, empreinte de solennité, souligne le moment eucharistique où le pain et le vin deviennent le Corps et le Sang du Christ. Une œuvre qui transcende le temps et élève l''expérience liturgique.', 'pas un individu spécifique');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (3, 'Messe de Saint Jean - Sanctus 2', 'assets/audio/Sanctus2_kD9eXgg.mp3', 'assets/pieux_GjUDwdd_YpDhzeE.jpg', 'La revisite de "Sanctus 2" présente une nouvelle interprétation du Sanctus de la Messe de Saint Jean. Cette adaptation musicale apporte une dimension contemporaine tout en conservant la solennité du Sanctus. Elle reflète peut-être une créativité artistique, offrant une expérience renouvelée de cette composition liturgique emblématique.', 'pas un individu spécifique');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (4, 'Hosanna In Excelsis (Based on Cannon in D) (2022, arr. Wilberg)', 'assets/audio/Hosanna_AiJ8sQO.mp3', 'assets/prier45T35_K79DQq1.jpg', '"Hosanna In Excelsis" est un chant liturgique qui exprime louange et adoration. Souvent associé à des célébrations religieuses, il élève des acclamations joyeuses, saluant la venue du Christ. L''arrangement de 2022 par Wilberg, basé sur le classique "Canon in D" de Pachelbel, fusionne harmonieusement deux pièces emblématiques, offrant une expérience musicale riche de spiritualité et d''élégance.', 'cindy mack wilberg');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (5, 'Gloria', 'assets/audio/Gloria_BL3mngK.mp3', 'assets/PRETRE324_U4PONkV.jpg', 'Le "Gloria" est une hymne chrétienne traditionnelle exprimant la glorification et la louange à la Sainte Trinité. Utilisé dans la liturgie chrétienne, il remonte aux premiers siècles du christianisme. Son auteur est inconnu, car il est issu de la tradition liturgique plutôt que d''une composition individuelle. Le "Gloria" célèbre la grandeur de Dieu et exprime la joie et la gratitude des croyants envers le Créateur. Cette hymne a traversé les siècles, demeurant une pièce centrale dans les célébrations liturgiques de diverses confessions chrétiennes.', 'pas un individu spécifique');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (6, 'Tu fais ta demeure en nous', 'assets/audio/demeure_0Rnwsir.mp3', 'assets/Adoration_29Wq3Q2.jpg', '"Tu fais ta demeure en nous, Seigneur" évoque l''idée chrétienne de l''habitation divine dans les cœurs des croyants. Cette expression reflète la croyance en la présence continue de Dieu au sein de la vie individuelle et communautaire. Elle suggère une intimité spirituelle, où la divinité résiderait dans chaque âme, guidant, inspirant et apportant réconfort. C''est une invitation à la connexion intérieure avec le divin, renforçant la foi en une présence constante dans les moments de joie, de peine et de méditation.', 'pas un individu spécifique');
INSERT INTO myapp_audio (id, audioName, audioUrl, imgAudioUrl, historyOfAudio, author) VALUES (7, 'Gloire à Dieu au plus haut des cieux - AL 23-70', 'assets/audio/GloireADieu_nkIUPZC.mp3', 'assets/jesus343_xzPipsq.jpg', '"Gloire à Dieu au plus haut des cieux - AL 23-70" est une hymne chrétienne vénérée, aussi connue sous le nom de "Gloria". Cette prière millénaire, débutant par "Gloria in excelsis Deo", symbolise la louange céleste. Souvent chantée dans la liturgie, elle transcende les époques, inspirant la dévotion et unissant les fidèles dans la reconnaissance de la grandeur divine. L''auteur de cette version particulière ("AL 23-70") demeure inconnu, mais son impact spirituel perdure à travers les générations.', 'pas un individu spécifique');

-- Tableau : myapp_intention
CREATE TABLE IF NOT EXISTS myapp_intention (id integer NOT NULL PRIMARY KEY AUTOINCREMENT, intention_title varchar(70) NOT NULL, intention_text varchar(350) NOT NULL, type_of_people varchar(100) NOT NULL);
INSERT INTO myapp_intention (id, intention_title, intention_text, type_of_people) VALUES (1, 'test1', 'sacha le connard', 'Pour votre famille');
INSERT INTO myapp_intention (id, intention_title, intention_text, type_of_people) VALUES (2, 'florian', 'je remercie le seigneur pour mon semestre', 'Pour les votres');
INSERT INTO myapp_intention (id, intention_title, intention_text, type_of_people) VALUES (3, 'Thomas', 'Merci seigneur de m''avoir permis de sortir ce soir et de revoir mes amis.', 'Pour vos amis');
INSERT INTO myapp_intention (id, intention_title, intention_text, type_of_people) VALUES (4, 'Maman', 'Merci maman d''avoir fait la route pour me voir malgré ton temps libre restreint.', 'Pour votre famille');

-- Tableau : myapp_prayer
CREATE TABLE IF NOT EXISTS myapp_prayer (id integer NOT NULL PRIMARY KEY AUTOINCREMENT, prayer_text varchar(200) NOT NULL);
INSERT INTO myapp_prayer (id, prayer_text) VALUES (1, 'La main qui donne est bien plus heureuse que celle qui reçoit.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (2, 'Celui qui se retire de la discipline tombera dans l''indigence et l''ignominie, mais celui qui reçoit de bon cœur les réprimandes sera élevé en gloire.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (3, 'L''ami est quelquefois plus proche qu''un frère.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (4, 'La sagesse vaut mieux que la force, mais la sagesse du pauvre est méconnue et ses paroles, personne ne les écoute.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (5, 'Un ami fidèle est un abri robuste, qui le trouve a trouvé un trésor.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (6, 'Un ami fidèle n''a pas de prix, et pas de poids pour peser sa valeur.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (7, 'Pour voir le futur, il faut regarder derrière soi.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (8, 'Il n''est rien que l''amour ne puisse affronter, il n''existe pas de limite à sa foi, à son espérance, à son endurance.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (9, 'La beauté d''une femme sotte est aussi ridicule qu''un anneau d''or au nez d''un cochon.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (10, 'La lumière des yeux est la joie de l''âme, la bonne réputation engraisse les os.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (11, 'Ne te laisse pas vaincre par le mal, mais triomphe du mal par le bien.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (12, 'Il y a un temps pour tout, un temps de pleurer, un temps de rire, un temps à se lamenter et un temps de danser.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (13, 'Une femme parfaite, qui la trouvera ? Elle a bien plus de prix que les perles.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (14, 'L''homme qui a de la sagesse est lent à la colère, Et il met sa gloire à oublier les offenses.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (15, 'Là où il n''y a pas de vision, les peuples périssent.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (16, 'La gloire de Dieu est de cacher sa parole sous des voiles, et la gloire des rois de la découvrir.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (17, 'N''abandonne pas un vieil ami, le nouveau ne le vaudra pas.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (18, 'Honorez de votre bien le Seigneur et donnez-lui les prémices de tous vos fruits, et alors vos greniers seront remplis de blé, et vos pressoirs regorgeront de vin.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (19, 'La tristesse du cœur humiliera l''homme, et la bonne parole le réjouira.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (20, 'La justice élève les nations, et le péché rend les peuples misérables.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (21, 'Un homme qui abandonne son propre lieu est comme un oiseau qui quitte son nid.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (22, 'Le cœur de l''homme prépare sa voie, mais c''est au Seigneur de conduire ses pas.');
INSERT INTO myapp_prayer (id, prayer_text) VALUES (23, 'Possédez la sagesse, parce qu''elle est meilleure que l''or ; et acquérez la prudence, parce qu''elle est plus précieuse que l''argent.');

-- Tableau : myapp_randomimg
CREATE TABLE IF NOT EXISTS myapp_randomimg (id integer NOT NULL PRIMARY KEY AUTOINCREMENT, img_url varchar(100) NOT NULL);
INSERT INTO myapp_randomimg (id, img_url) VALUES (1, 'assets/bible33_7ude8Uq_gNJVxhp.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (2, 'assets/CHRIST454_h7d2a45.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (3, 'assets/marieSt_LZ2E8fh.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (4, 'assets/church234_YhNjqRI.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (5, 'assets/ensemble2_nDabfT8.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (6, 'assets/ensemble34_RWksIg5.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (7, 'assets/ensemble56_SoyzBdy.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (8, 'assets/grandg_PXdTKhO.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (9, 'assets/img1_5NxP1Kv.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (10, 'assets/img8_FPXKgWF.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (11, 'assets/fatima_8pU6HJN.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (12, 'assets/img9_X3KxBad.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (13, 'assets/img6_pPCfmMq.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (14, 'assets/img44_Y52d0RV.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (15, 'assets/vatican_2QSjvtP.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (16, 'assets/statue_lN5UaJD.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (17, 'assets/img435_C3ZIYEm.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (18, 'assets/statue_xneiqfE.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (19, 'assets/lennh_Ov5pjWX.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (20, 'assets/jam_tEEy9qF.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (21, 'assets/img963_ZQhR6u7.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (22, 'assets/img588_NTenT8M.jpg');
INSERT INTO myapp_randomimg (id, img_url) VALUES (23, 'assets/img344_uWqKDQQ.jpg');
