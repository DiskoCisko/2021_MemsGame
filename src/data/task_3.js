import { images } from './task_type';

const task3 = [
  {
    type: images,
    img: [
      'https://cdnimg.rg.ru/i/photogallery/2021/04/29/7030d961b3aad34/7030d961b3aad341619694301.jpeg',
      'https://assets.vogue.ru/photos/615af8c0c05ec49254eb6878/master/w_1600%2Cc_limit/Squid_Game_9-1024x503.jpg',
      'https://www.kino-teatr.ru/movie/kadr/139455/981682.jpg',
    ],
    ans: ['Пищеблок', 'Игра в кальмара', 'Топи'],
  },
  {
    type: images,
    img: [
      'https://resizer.mail.ru/p/b38a3e21-18b0-5f63-aca9-628573ead412/dpr:200/AAACUJ13BXOxqrX79mypu3LRATLr_ZoiDkMeZn_UoqtWHLM7oUEE5t4RUGEoPDP-j_dyMTIGZ6JUfl7xjzs3vchE_ls.jpg',
      'https://cdn.lifehacker.ru/wp-content/uploads/2021/03/361204_1616762707-630x315.jpg',
      'https://1.assets.klops.ru/media/W1siZiIsIjIwMjEvMTIvMjAvNjI2c25qMG9jZ19maWxlLmpwZWciXSxbInAiLCJ0aHVtYiIsIjEwMTl4NTczKzEzMCswIl0sWyJwIiwidGh1bWIiLCI5MjR4NTIwIyJdLFsicCIsImVuY29kZSIsImpwZyIsIi1xdWFsaXR5IDg1IC1zdHJpcCAtaW50ZXJsYWNlIFBsYW5lIl1d/file.jpg?sha=6e5bcda6cc5d8b56',
    ],
    ans: ['Чернобыль ', 'Майор гром', 'Дюна'],
  },
  {
    type: images,
    img: [
      'https://pluggedin.ru/images/upload/1586471085.jpg',
      'https://cdnimg.rg.ru/i/photogallery/2021/04/06/c8c820b2fd0f2fc/c8c820b2fd0f2fc1617716564.JPG',
      'https://www.tut-news.ru/sites/default/files/2021-06/vampiry_sr.jpg',
    ],
    ans: ['Веном 2', 'Чикатило', 'Вампиры средней полосы'],
  },
  {
    type: images,
    img: [
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/49036494-1144592.JPG',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg102068_1.jpg',
      'https://www.kino-teatr.ru/movie/kadr/142958/1014182.jpg',
    ],
    ans: ['Петровы в гриппе', 'Полуночная месса', 'Небесная команда'],
  },
  {
    type: images,
    img: [
      'https://img.gazeta.ru/files3/84/12857084/noti-pic905-895x505-80627.jpg',
      'https://img.gazeta.ru/files3/377/13022377/upload-original-1hqb-pic905-895x505-19613.jpg',
      'https://cdnimg.rg.ru/img/content/212/36/94/Bez_imeni-1_t_650x433.jpg',
    ],
    ans: ['Джеймс Бонд', 'Последний министр', 'Локи'],
  },
  {
    type: images,
    img: [
      'https://images.kinorium.com/movie/shot/676195/w1500_46683740.jpg',
      'https://media.kg-portal.ru/tv/f/fatethewinxsaga/trailers/43264t.jpg',
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/49679362-1488787.jpg',
    ],
    ans: ['Люпен', 'Судьба. Сага о винкс ', 'Сексифай'],
  },
  {
    type: images,
    img: [
      'https://static.kinoafisha.info/k/movie_shots/1920x1080/upload/series/frames/0/7/1/4170/36b551dc21274dda980af06daa94875c.jpg',
      'https://news.store.rambler.ru/img/3e838c5f43c6d4528b2118eabdd2424c?img-1-resize=width%3A1280%2Cheight%3A960%2Cfit%3Acover&img-format=auto',
      'https://nyaa.shikimori.one/system/screenshots/original/69c5c36c677999942f622a78626cc029d7eaf57d.jpg?1617299565',
    ],
    ans: ['Код на миллиард долларов ', 'След', 'Король шаманов'],
  },
  {
    type: images,
    img: [
      'https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2020/04/Money-Heist-season-5-2398109.jpg',
      'https://cdn.lifehacker.ru/wp-content/uploads/2021/06/Snimok-ekrana-2021-06-21-v-14.46.37_1624276054-scaled-e1624276081280-630x315.jpg',
      'https://www.kino-teatr.ru/movie/kadr/149281/1064367.jpg',
    ],
    ans: ['Бумажный дом', 'Рик и Морти', 'Моя веселая тетя'],
  },
  {
    type: images,
    img: [
      'https://s8.cdn.teleprogramma.pro/wp-content/uploads/2020/04/l/23b3777f94457d5445a71a7e717de46d.jpg',
      'https://images.kinorium.com/movie/shot/1694366/h280_47102766.jpg',
      'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/79ab2a6ffd80b61c2e43e118931f9a70/960x540',
    ],
    ans: [
      'Проект Анна Николаевна',
      'Засланый из космоса',
      'Чудотворцы. Дикий запад',
    ],
  },
  {
    type: images,
    img: [
      'https://avatars.mds.yandex.net/get-zen_doc/3894718/pub_5fafcb531064d30b6c813159_5fafcf0370f5da1bda6cfb79/scale_1200',
      'https://static.inforeactor.ru/uploads/2021/09/07/full-55-1631019932.jpeg',
      'https://images.kinorium.com/movie/shot/2034665/h280_43390583.jpg?21596120784',
    ],
    ans: ['Метод 2', 'Сексуальное просвещение', 'Не пытайтесь это повторить'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2019/shotimg/shotimg91108_2.jpg',
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg94664_4.jpg',
      'https://www.vokrug.tv/pic/product/1/2/0/0/12009825b42f6b7ffaae1cd10a137e07.jpg',
    ],
    ans: ['Утреннее шоу', 'Тэд Лассо', 'Внутри Лапенко'],
  },
  {
    type: images,
    img: [
      'https://www.soyuz.ru/public/uploads/files/5/7467581/20210604144422b5d6278303.jpg',
      'https://lifehacker.ru/wp-content/uploads/2021/05/AOTD_080719_14506R-CC_1621513559.jpg',
      'https://www.kinonews.ru/insimgs/2018/shotimg/shotimg83182_1.jpg',
    ],
    ans: ['История Лизи', 'Армия мертвецов', 'Ты'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/147723/1057515.jpg',
      'https://cdn.7days.ru/kino/pic/cbf/945757/586526/90.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101618_2.jpg',
    ],
    ans: ['Зелёный мэр', 'Любовь смерть и роботы', 'Кликбейт'],
  },
  {
    type: images,
    img: [
      'https://2datyvyhoda.ru/wp-content/uploads/2020/12/American-Gods-3S.jpg',
      'https://2datyvyhoda.ru/wp-content/uploads/2021/09/What-If-2021-S1-E9-4.jpg',
      'https://www.kino-teatr.ru/news/24103/md.jpg',
    ],
    ans: ['Американские боги', 'Что если…', 'Милиционер с рублевки'],
  },
  {
    type: images,
    img: [
      'https://s10.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/09/Bez-nazvaniya-9.jpg',
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg97315_2.jpg',
      'https://www.soyuz.ru/public/uploads/files/6/7464943/20210503120731bd1c88b50e.jpg',
    ],
    ans: ['Нарко. Мексика', 'Общага', 'Митчеллы против машин'],
  },
  {
    type: images,
    img: [
      'https://img.gazeta.ru/files3/996/12914996/upload-a5_2-pic905-895x505-23955.jpg',
      'https://www.soyuz.ru/public/uploads/files/5/7474358/1005x558_20211026141235d41b242af2.jpg',
      'https://www.vokrug.tv/pic/product/a/a/1/7/aa175d7b17ff4c343680b36bea57aabf.jpg',
    ],
    ans: ['Авеню 5', 'Лок и ключи', 'Смешарики'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg97191_9.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101643_2.jpg',
      'https://cdnimg.rg.ru/img/content/214/63/62/9mu02368_d_850.jpg',
    ],
    ans: ['Лига справедливости Зака Снайдера', 'В ночь', 'Пропавшая'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg99330_8.jpg',
      'https://www.kino-teatr.ru/movie/kadr/138789/947614.jpg',
      'https://www.kino-teatr.ru/movie/kadr/130649/887842.jpg',
    ],
    ans: ['Джетлаг', 'За час до рассвета', 'Огонь'],
  },
  {
    type: images,
    img: [
      'https://marieclaire.ua/wp-content/uploads/2020/08/serial-Korona-kadr.jpg',
      'https://avatars.mds.yandex.net/get-zen_doc/1677529/pub_60086304fc8f1029f7bdf956_60098130fc8f1029f754dfb9/scale_1200',
      'https://vogue.ua/media/cache/resolve/inline_990x/uploads/article-inline/ac8/eaf/65c/5c6a65ceafac8.jpeg',
    ],
    ans: ['Корона', 'Настя соберись', 'Рассказ служанки'],
  },
  {
    type: images,
    img: [
      'data:image/jpeg;base64,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',
      'https://b1.filmpro.ru/c/461881.jpg',
      'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/177294/16f90d1a6feb00b43ce69c67efeda881/280x178_2',
    ],
    ans: ['Я не шучу', 'Детство Шелдона', 'Американская История ужасов'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg95726_2.jpg',
      'https://cdnn21.img.ria.ru/images/155867/61/1558676149_0:45:1200:720_1920x0_80_0_0_7da9ec336e867db78856d32ec69f8ec6.jpg',
      'https://www.kino-teatr.ru/movie/kadr/138044/1003168.jpg',
    ],
    ans: ['Ванда Вижен', 'Фиксики', 'Хэппи Энд'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/145298/999468.jpg',
      'https://www.soyuz.ru/public/uploads/files/5/7462414/2021033114100372f5897434.jpg',
      'https://www.kino-teatr.ru/movie/kadr/145336/1000374.jpg',
    ],
    ans: ['В ее глазах', 'Нерегулярные части', 'Дота. Кровь дракона'],
  },
  {
    type: images,
    img: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNpCBgUH4c1RtxyTMTqiG6DQXgnjtpkmNyQ&usqp=CAU',
      'https://media.kg-portal.ru/tv/s/shadowandbone/images/shadowandbone_9.jpg',
      'https://csn-tv.ru/storage/uploads/originals/RXQccYu3rUfgEGqHrRJRLgtHH1s5Hpqt3GBZnzPn.jpeg',
    ],
    ans: ['Ведьмак', 'Тень и кости', 'Беспринципные '],
  },
  {
    type: images,
    img: [
      'https://www.vokrug.tv/pic/product/7/a/0/9/7a0989af1f15ae4aaff068c5ccc20cd9.jpg',
      'https://2datyvyhoda.ru/wp-content/uploads/2021/11/Ivan-Ohlobystin-i-Mihial-Porechenkov-v-seriale-Polyarnyj-2-sezon-2021-Epizod-5.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg99171_4.jpg',
    ],
    ans: ['Неслучайность ', 'Полярный ', 'Гнев человеческий '],
  },
  {
    type: images,
    img: [
      'https://cdn.smartfacts.ru/436862/rayya-i-posledniy-drakon.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg97829_4.jpg',
      'https://cdnn21.img.ria.ru/images/07e5/06/02/1735275740_129:0:3770:2048_600x0_80_0_0_5583cf82925f5b67528d8296e5115051.jpg',
    ],
    ans: ['Райа и последний дракон  ', 'Мортал комбат  ', 'Круэлла'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101455_16.jpg',
      'https://www.kino-teatr.ru/movie/kadr/144574/992666.jpg',
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/fabf55e9-6b41-45eb-8055-a0d7ce509800/960x960',
    ],
    ans: ['Отряд самоубийц', 'Пара из будущего  ', 'Родные '],
  },
  {
    type: images,
    img: [
      'https://images.kinorium.com/movie/shot/2154646/h280_49907910.jpg?21628203463',
      'https://www.kino-teatr.ru/movie/kadr/144977/992655.jpg',
      'https://www.kino-teatr.ru/movie/kadr/143995/972390.jpg',
    ],
    ans: ['Время', 'Гуляй Вася. Свидание на Бали', 'Босс молокосос 2 '],
  },
  {
    type: images,
    img: [
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/49640924-1392698.jpg',
      'https://cdni.rt.com/russian/images/2021.05/article/60915ddd02e8bd38d157077c.jpg',
      'https://lh3.googleusercontent.com/proxy/cSLKVOG-2AIsocyxN8ON5y6_7BjdQLWtTTZxuaF84ZKeU2QieRj3wLm77hwv0_3j0EojW_0IdUY21T7QwVO4dJBaFok-OLWkmxk7mpFRvu9caJs14oW3jxkw',
    ],
    ans: [
      'Смертельная зона',
      'Прабабушка легкого поведения. Начало',
      'Космический джем. Новое поколение',
    ],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/video/13356/start.jpg',
      'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/69336/d4bbd7ba6ca6d8b8aaedc374575feb76/orig',
      'https://www.soyuz.ru/public/uploads/files/5/7465517/1005x558_202105171440047155f73e70.jpg',
    ],
    ans: ['Кислород', 'Ага', 'Женщина в окне'],
  },
  {
    type: images,
    img: [
      'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/movies/frames/44860043-1551413.jpg',
      'https://lifehacker.ru/wp-content/uploads/2021/07/C326C004_190820_R42R_2.2.1_1626183576.jpg',
      'https://images.kinorium.com/movie/shot/2448925/h280_49869874.jpg?21626525870',
    ],
    ans: ['Улица страха 1994', 'Улица страха 1978', 'Улица страха 1666'],
  },
  {
    type: images,
    img: [
      'https://images.kinorium.com/movie/shot/2572979/h280_49999611.jpg?21631656356',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg100662_1.jpg',
      'https://avatars.mds.yandex.net/get-ott/239697/2a000001798048cf8ea98bdef4b1caa1572d/678x380',
    ],
    ans: ['Никто не уйдёт живым', 'Кроваво красное небо', 'После Чернобыля'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg102061_3.jpg',
      'https://cdnimg.rg.ru/img/content/205/28/78/123_t_650x433.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg100145_13.jpg',
    ],
    ans: ['Виновный ', 'Сила грома', 'Проклятый чиновник'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/148740/1056667.jpg',
      'https://www.kino-teatr.ru/movie/kadr/138744/891568.jpg',
      'data:image/jpeg;base64,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',
    ],
    ans: ['Команда К ', 'Хэллуин убивает', 'Щенячий патруль в кино'],
  },
  {
    type: images,
    img: [
      'https://www.yuga.ru/media/e9/f1/2982_809921036383751_686869935183203189__mfqgbyw.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101464_2.jpg',
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaGhgcHBkcHBgaGBwaGhgZGhgaGBocIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKUBMgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EAEQQAAEDAgMFBAcGBAQFBQAAAAEAAhEDIQQSMQVBUWFxIoGRoQYTMrHB0fAUQlKCkuFistLxFXKiwiMzQ1PiFiVEg6P/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAqEQACAgICAgEDBAIDAAAAAAAAAQIRAxIhMQRBUSJhgRMykaFx8AUj0f/aAAwDAQACEQMRAD8AtKNMyFdvw2amC63n3qE0gOuVYsxTIjRXlJ+jmilzZVUqJkgGArPBUhlOYSN1teUpGgLHQcNCp2HqNAykiFOcrXA8I88lf6qiTDqeXgfmo1bZrSJaY6q1qVWCQTI+t6iPrMNgljKVlZKNFJUwZaU1gjdKtqj28QokXVk7Ivg7TpixI7lZ+ra8CKccCLlVzCFY0sQ4NtpwWlfoVd8kWvspwgwLx5qQzYQi7vBEfjyREXT6e0Ys4Hqhc6G+i+QD9kNaydSoL8LG5WGIxs6DxQzimxzTRcl2Tko3wQX4YhDFJWVF0gkpppyeCfYXX4IbKRF08MKmVcoBLjAGqrnbWpzAa8+HzUJ54xdSdHRDx5zVxVk+hTIlHZTJOp8VCw+1qRt2m/5h8lIOIafZIPRKssJdMd4Zx7TG4+Isq7KplaSgFhVYyRKSZLweFB9pXFBrG6AKkZWefZFlKc10b+iWSb7DF0W7qwhQKlPPrdV7ajgYJ+amUXZtCl1oO1gamBO4qPXwQGUbzqTp3K6Y0BR69Vs2CKkwOCoC+k1gyt1QC8Nui4yooNYEhFP5A4gMQwOMhcbgnSLWTmqZTrgDVHZm1QN+DESdVFLoKPXxM2UOs1FAfYV+NjRNp4xzrTZRSxNhaghMRVkwNEAEp4YjCgRBIRSA3RHhJTcgSTE7E0TvUn1zQIAHxURoTkGrMuA9TGlwAOoESgis7cUMtKWQ8EtUUQX1pJumujclCc0jj3LUggS0yllKkOrhrSYFk6pB7Q6rbK6Dq6sBTYZvorWoYaALk6DhzUJjxPaE/JHqYijTexvbL36NYx9R3VwY05RzKDlSMlbJeGYXBEfgZidU/CYhjgcs2MEEFrgdbtcAQpLal1Pd+htF7K92zr8UB+DawnM4AbpIB8NSoWM2zVe5wYQGyQCLW3S4zfoq5zXE9pwPf751XHPz64ijux/8dfMnRYVdosZoS7jAgd038lHfto6Bnif2UZzG8QOAifgo8An2vI/QXO/LzS91+Dsj4OGK6v8AIfE40vs6AOEn4KKxzToPfH9knsbrm8k0gTrZRlJye0nbLwgoLWKpCe8jh4EprMSRub7vekQCfaPn8ExzR+OPBBBaJzNr1G75HA9r3o9Lbl+2wflPwVQynweCOZPf90pwYZ9od0T7lWOacemSlgxy7SNZg9uUSImDuDhH7I9bH5tIjiPmsW+mSZzCOFh5gpUy9t2uIPEH910Q8ySf1Kzln4EWvpdGrcJ59CpNPEhg0KyuH25UYe00PHGId4haGliGva14uCJE+48wV2wzxyLg4J+NLE+SXWxTgJUX7XNylUfIUcABMIFdiZ1TvWWQsoSddK2MkjhqBNzp7aaI3Dk6J4iSIZXJVuzZ0i6H9na08eqOyForCuBk6K6dhmOGgnkgjCQhsGgGDwsm6sq2DLgIhAacuiIcYUrlyHXgX+HdEk37Q5JHZi6r4G4jZ0exJ+Ci1cI5urVPGKO7VArVnG5v3LKTM4pkDLyUilhyU0zMwjCo5baw1QN9EixCYcOIlHdVcUy6axaHUcMw/GVZ0MKwiYAPKIVWHHgiDFEJXz0MuOyx+zsaNBPQLzn0arVX43H9sB7agy5nEdhr6kMaJFjlYOUA3iDtKmLceK85xGOdhNrveGB4rBnZJj2g3tAwb5mO8Usk6HxtWbLAiq3GVnPcC1zYADpgNfDARuPtn8xTdp44lxGY5RYAcdO8yqjYe0mVjiMRSDmCo9rWNddwyDM5xgn7zzv+6isexhJkl34nST3DcuHy8qpRX5PS8PB9TnJf4Dl5Oi6GHgfIfBRamPAHtAc5AQP8QBBh4PMEn3LgpnpE2pTMGLOixJETzH7qofj3N7DWmu8Dt5XNY1hn7zjIG/nbqn1MYHWa4FxsOy7U6aiB3o/odgqmGpZnsa55fmyuN5gjtOvcEkjme9XxxjVyOfNKSaURz31cjXNpsMi7DVcX5r9luWmQeq7gq7KjcwaQZIc0u7TXDVpgRvBkaghGr1arCKswTLTNx2gGAF+YOJI1cBIN1Q0sU4VKrnlgL3ZnQbZogwSL7lRwi4tonHJLZJ+y9yM5jo4/JRqlPg5/iCPMKM3FDl3ORA5x0aT0EqOtF0xrmu3OPfv70Six5HtAcLT8kvVP1yu8lLpktaJkd0b1vRm+QX2Kr+Md7P3Q34KqPvsd1Dh7gpnrjz8UyriHAcupWTYLK17Ko1ZYcL+4q/8AR2pnpuH4XeThPvDlVjFHiI6pzMY5t2kiY0Nj14q2KekrohnhvGrNOWJuRRNiYz1mZrz2m3HMH5H3hTXkDUgd671li1Z5jxSjKmcAXQxJrbTMogaipJsElSHspypdGmQo9F4UsPTuRPVkppgKHVaEQvlDLZS2GmzjGgIjzK42mulqVyHUSNUYhZFKc1DIU2yiQzKkuyktZqCBic+mDab/ABXWpzLFNsxNEdGGA6obmo7nlAc9MpAcDjGclzIN6VSsVHzlHYGhJqNaNFFITmvCXrEykhXBjAsjtPAeu2lhqzSHU2ljMwhzS9vrXluYHUS2x4rXvdM8wvNfRLFGi+k5zj6up65723yj7OH3tuENPeeMJJS9FMcPfwW7cN9lY5ruw31z2Mi2Zxu3S9xvKOyg4a21tz58Vl/SX0vZimYdoY8PY7M82Dc2ZuXKJMiAfELYYnCuIJDHEzxHxK4PIxqLte7PT8XK5Kn6I/qgIlzB0ACI3LvfPefcE51CASKZkTYxJ4b45qt2htJ1MZcjQ8/dPagWu6DGkwoQhKcqR1TyRhG2TMRiGNZmOg3wfio+z2YmqwvoEPZmILS4B7TrDg47xcXKoq5qVnAvPRos1o07I3e9TPR7aBwtZrnGab4a8bspNnR/Cb9J4r0I+JrHl2zz8nlOT4VIBtw1XPaypRcHsuDExoeyRYHQmL6SrT0fwrHMJcczw7tN/CdWgjoZ71bbY2gaePpMAHqXU2se0RlPrXv7QA3yGmeE8VkPSPFihjqjsPDIyscNWuhjcwLZ92kLfpbR1XDEjm1ltJGvGDp2/wCGx35W/JHp0WtEBjQOUD3Ks2LtZmIbZ2V4HaYTccwYu3mrFz3D7313argnGUXrI9CEoyW0Tro3N9yG6rusEB73bnDw4dVFfVdxHnfoskZkxz+ZQw7jKiHE/UI9LM7T68kWgIM0TxTw0WHwXGU3cR9dyk0aRJyiJcWgHqbwOIAJ7kjfwaTpWDw9CCS0D8JI33Ei31ZWLMMALies+EK7Zs1hHsgcxY+IuouJ2c5skGRG7XktLHPvs5dk2ZmsHMfNM5Y1Fsp5xNh8lcbJxwqtdBbmaYdlNtNRv4juXHbMpNAOJe0Toxzw1vQye0UOtg6dF7atNoAgNdl0LCbExrGviujFtBW/4JzimWrGIwQc8iQuteutSOdxJLAiBgQGVEUORsFBAE165nXS5AI0hCLU4uXStRrGZAku5CkjwDke0LoSywuNCCCOLUIsCKQqza+1W0WuM3a0ucdzQBJJ+SDairYyi5OkHxEDUgdbKBUxbBoSegt4lYo+kGKxL5wlL1zYOaQ4OaRudcBoMiON+EKfszaPrmklrmuY4tewzma4ajopznNK6otjxwbq7Zd1NoHcEE4p5IMxE6aX4jf3qKRK6Fzucn7OlY4r0SjinfiKwe1sd6vBNpMyl5qva7eW03VXuaz8xpgkcA3itjnhZP0gZSZLA22f1hkklz3AgAGbAS4nuVcEuafJLNH6eOCipYVoFY2GVjSO+vSjyBHevWftM7gvH8NVANRgE+sYWi9gc7Hgnl2CvUcK/sNnXK2b78onXcj5SfDN4jXKJdXEHUmBvuLcdF5rj8Y9zsxN6jy48YvHgBC222sQBQeRrlyjTV3Z+KwGIdNWNzBHw+BT+FHhy/APMl1E0Oy3mBPL3tT9p0wWgfXtOChbNfA+v4VJx9T6/OV6ByeisrbSe4NablrWNabTFN+dkkibSRaNAq/F1i973u1c5xPVzpd747kV2pO+LdSYnuE+SiH68EIxSbYknYxuLcx7XtMOaZ/Y8ivSKONzsa5odDmg6GIIn4heX11uPR/azRhmNd7TZbvmAez4NI8FyeZC0pI6vEnUnFltVxBbqdUwPB3jvJHvQWbRn2myQAJA1O+/gl/irdMngF59P4PQ2jRJpU7hT8xiyrW4o2IY5SXViSDlNtb8UJJsKaJDCVebKoXY6L6+Tv6lQMfxb52Wk2HWDmixblEQfIg7xZCMbkieb9pbYioWsJGsW333WVVjMBVa5rnV6zspYXXYym7M4tLWBkOBbAJkQQ4XN4uK2V7S0iQRoqLFsoi73uYWdoZ3vLAR7JMmCO9dapHIkHbs5lR73ubmc0saACGm8S4ujcDYclBqYfM2oxtwxzmyN8gOBtvhwnnKEMUx5LnYmgTAAdRflc61wWFx3zF96tcFhWUWQ2b3MzJJ1Jm8ophf+SDgqxcxpOsX6ix8wVJDlX4YD1lQtNi4W3AxeOqnNCrFcEpLkNTfKkMfKiNtCO1YRkiVwFcaFWbZ2gGDI0w9w/SOPVCUlFWwxi5OkSa20WNMF1+Auor9vsBsHHw+azZDotqePvgLjcO46u7gAJ6yZXK88jsj48V3yaD/ANRt/AfEfJJUXqOvkkh+tL5H/Qx/Bv3BMa26c5V7toMa4hzrjdqb8l1uSXZwKLfQbaWKFNhdv0aOf7arzn0vru+y1TJk5Z73tB960+2MR6wtLSRE21B+Sz+18M99CoyAZa6OoEjzAUHPbIn6R0xhrBr20y+9F6TMLs+iAIc+mKjjEEueM1zyBA7lnMC6cRiXjR3qp/zZXEnwLFdbWoZsPRqteQ12GY1rRdpc5jC13IDL3ydFUbHa5rJc0y9xcSZm4DWzO/I1s85Vssvof3I4Y/WvsWGZPDU3NxXDWbx8lxUdrY8NCyPpjRhzXjQmPAD5rUjE7r+AVR6U0y+gXEGGEH68lXC6mieZbQZjtnUs1em3i8T0AJPuXotF4DGkmOy3fyXnmyBOIZugPPTsOHxWvbULWjsyeJ9kcIG/vtyXRnW1I58EtbY/0hrdljRvc12+C0NJ06x4LFYd2Z73fxR4f3Wu9L6mUtE+zTcY5k5RZZDZ7SGyd5nxKtgioxSRLPJylbLzA6fX8KfjHa9/86iYbFNFjPcCeHyRqzw4SN4/3LpJ+iuq6/X4lDf9eamVtT9feUR4v9c0RWR64171c+i1SQ9mUEnK4H729rgP9PgqaqVO9EqhGIYAYLszZ4Wn/ao51cX/AL0Pi/cjY4R72OyyCCd4n7xBExINjqeCt2Ugbw1QDRkAtBbfNe/juBRqDyLZiepnzXkyafJ6sU1wTgyEN43xKE151krryTpolCwzIIlTtn4oMJE6/D+/kqkgg66+8fXkhvPMpoqmLJ2qNezHjih4mux47UHyI6EXCxQxzgSMwMGDdEO0XKtMnSLplGix+eXE7sz3OA7nFN2htuRAKzlfFE71HY/M4NkCfq3Eqij7YjZptiYpoDy50Fzt/ADj3lXjXzBGhWSZAEbloNiVM1ON7HFvdqPIx3J4T5oTJClZYFycyomPamsCLfJImuxAa0uOgErN18SHOc8iS47r9PIIu1cXm7AMQQSd3+WFV1GE/ed00C5s0tnR04Y6q2PrV4gkgRu7kL7XPs36D4popgbh7z5p+UndbwUqR0WM9Y/8J/UPmkid48lxGhdjU1ttgtORsHcTp1VK5ly4m515qLntJn4BOFeR9Qs5Sl2BRjHpCdiSHcvNPZVzXGiq9pPiD9QlhMVDSD2db8J3o68Cbc0SMbQcMJhjmOUkAMi3q/XhoHTIY6QpAqnmvOfXv9YxgrOyiplDi5xZAfZ2WYgwDAW8+0C1tRKvmVUSwu7JReU3MNYv3IHrEi9QLhnVDwUTaHbpvZxafGJCc+om50yVOxW74Mh6MMmu934WEd7iAPcVp3uEablUejdAD15/jy9zR/5K6jkrZXbIY1SJ1XCsq0K2ZjHOytaHOEvEMBhtrG5PVYfFMa15a0Q0QB0DQFrq73gHISNCRJ1AEHhuCyWOEVHA8fgFTxnLZ2LmUaVBMMfr8yM827v9yjUT9d6JVfbu/wBy7jnIdfU9/vUZ+v1xR6rte9Rnm/1xWFYCsVrNmbNpUq9J0SHgOmbtcSZygDSCI71kXr0DZtBrvsz3ENDadIlxcLkNswDcLkk77Lm8iVL+S2CKbf4NHTwLXkODpZqADr4c0Slh6ThLbiY1dYjcbqNXxrGANplgaNzY43FusolHF0wXBuUSZsR2iRcryaZ37D2UmEkDUa3dbzQajWB2WL6xJ+ac/EskkFsmJIiTGkomBwxrvtoPadwHAcymjFgcitptkDNLWycros4t3A6cp3SrKnTqMqBlNjHmM7HkDtM0IJO+7TqIjmjbSpQHYbMctRrjRcbuZUaJyjkdfEb1QeilXGN9ZQderTdnkuYey4AOY0+zAIEwbTCuopq0LtTS+fnos8U2g901sM+m/e5lh1gwPeo/2PC7q1Qf5mB3uarxm0cYLGgD0B+Dihu2rWHtYUnud/SUClv/AFooMRs3DO/+SR/9b/gVAxOwKEdnFuPLIR5xZaeptYnXBn9J/oQXbWG7CeX/AIJ4ya6Yso7dr+0Z2jtUsfkezMwFrc8XE2zTvGnPXorqo9gGaBl4jTgoG3cc97QPUloBBNjo253AbvJVux8boHCzi98H7uZwy+PaTTgpR2XZFScXq/8A00T2NF8oTqGMaxhcwDM6APOZ6KA/aABiCdFHqVs2WbQfqygk1yO2nwTGTv11TifqVBfijMRA8/2RW4kEx8VnFjqS6DphhPchkeKVDM5l5JLmUrqYFE57Pl3cOiEYA4KsZtukRdzv9XzTH7WpkWce8OTrFIm8yYLGVZmdx3clB+1DI++jTA7r3TX1Wme2Bv8Av6+CP6O0GOxIDwyo1weMhDjJ9W/L7QA1AN1RY2uyEp88GQqUQMjZMZgDxgm/vXpGLptgRIiwhYBsGpTzAEGoyRugm46LZ/4kydT4OT5U5JNAwyUbTJrHxvkRwuk54KrX4xpNnEcbOTvtrOf+pQ/TZ0fqImPcANVX7VxmSk5410HIlddjWG0E+Kr9vvaaJhpHabx4wnhHlWJKXDob6Jn/AILuJe7+VivcyqPR5gbQZxMu8SY8oVg9y0+ZMEekSHvusxtSm71jjldBNrEzYK8zkuQ6zZewHTtT4JsctWCcdkZtuMYCQXQRaIMzPRNfj6f4j4O49EH0goZK77WMOH5gJ8wVX0aWZzWjVzmj9Rj4rtUrVnK+HRPxOIA1DhmuJaRLToROoQDiG8fI8VeemVCBScNBmb3QC33FZkIRm2rNJU6JbMM94zMY9w0kNJE2tK9H2Y8NpMaZBDGNO64aJ71Tej9HLh2cXAu/U4keUKzaVyZ5bcP0dOGOqv5CPpmScxcJsSSTefklC6TIXcqgVE0LXbHxdFlBrc4B1deDm3ysiXLljqEAtGg2lVwznB4c57xIbBLgMwLTYW0KzuKoYp2PpVKTKjRkyveZDQ0kh0kkCAQDAA0sCnh7GQ55hg9oiJ5R3wq3amPwz2FrHvBNiSW6b9Anxp3wBtVy/wCrNjhGYt7Q5ldjhp4dWKVkxzfvsP6f6AsH6L4agXlpxOSRIu0XHgtWzZTI7ONH6h8HrSjrKh4NSjfH8EtztoD8H+hRnvx9+yz/AEf1Ibdlv3Y4/qd/Whu2bV0+1k/md/Wsgtr7fwVm2Biy2HZQNCRl0PiqKlScx4Alxd424/srnbGCqAQcSSOrv6lBw13k6x2RzjXzlWX7Tnk1twWDWtOtjAXXsbeNYKDlvxR2DkoPsdEV9Aw03vPkd3cj1MNlYwki5vrMHRFdMDURw4b02rULgAdB8FrNRLqMZEjUW1PmEJ5gSVFLzOqc9/ET3pXEfYLnPD3JIPrykjqDdlbsijTfTbLJfAm5vI1AlFr0GNHZZrYakqxpMY32Who4AAWiIsJhFNbgIEQAmcpNg1jRnKmEqC4Y4g6W1jfGoHNNbg61jkfcXndc67xp3WWmNTsgcDP90wvM7gL2i/K/ittIDjH5MLUwFT1lNuW5e2Lt48itZR2Q1oADy4al7miZ4ATMKRQrNz5MoGUQTI7UZJtECZ05KRnHd1Tyk3QkYpWR2YNkySTAOgtO5EOFYWiM03zOMA7gA1vC8zy52OyoAZgHkdFxr7R5xdTpj2gDcCwTE9ogk2JkWsd1rd3VVvpPQAwxIbAlvaJJzHMAYkx5K4JVH6WPmmGDeQTyA/c+SeC5QknwybgcE0U6djORk/pE9ykGg2dB35j10k+W9N2PULqNN2/IydNWtDT4EeSmue6SRAmRcZrEcz3oSXIU+AJwYEONpvExNjAII5zxtuTfs7ZmBP1opE6aWv7p9wTQNdbz3dOCCM2Zj0voS5j9ZaWzb7pkfzHwVF6PYcOxTBFmkuP5Wkg+MLX+lDC+hOuQtPddv+5UvoXQmrUeZhrQ39TpMdzPNdMZf9ZCS+osfS6gHYcuv2XNO/jlP8ywgHivUdpUA9lVkWc1wZe/s2LrcZ05LBbJwZdWpD+Np/T2j/KjiklE2SLcje4TCNYxjCYhoZcG0N1kdEdjQL2uN4mO7cVwCNJuZ7+KTnnpaNBv1N965mrLp0NFMXvut1t801tOd9+AIudIFtU51QnUkwkH80uobOuw4Dc03mMp1HPdOiY3Cud7JnU7tLLofC760xG7hunitqDYE3CteQx/sSM1pMC+7orN+E2ZkyZO+H5p4ym7LxDA8+sALcp3TeR+6m1Mfgx/0wfyD4o7NcIeKUuWn+ChwuysCypnznKNBFQHvIVn/wC3n7x//T5JP2vhP+wP0M+ajP2pg5/5H+hn9SDk5PkrGNLhNfkM7C4D8Z8X/EID8DgzpUj8w+IXKu1MER/ySPyt+DlFfiMI77hA6O+BRQHa+SNtLAYb7tWeHbZ8kXB4GGNLTLY1jdaL7zdV2NOGceyY6lw/mV3hqhFJjABAAvvIi1x3eCpK9Uc93Ia3CHeddOV7ZrWRDQLdT9e5P9YZmSDx3pOqSZJJtwA3KVMbZDH0yNfrom1KEbwel/oome3MGx9/w8Exx/fqtTDshowgOj8xnS4tEzJXX4GCA607xcJwfcEgGDMRbyXatfMIysHQEfFCmbZHPsTOJ8P3SQp6efzSRpg2RAYK28s8HfNHYH73N7gfmiZUoTtiJHQSnByaAj4ZzAZcMwjQEa80GFFS2pFZ5h0QQSGuNyGRuvoVYl/8JKc+5s3KN3an4JOcLROgmYieXJFsyQN740aSSNLyOqjvxDx/0nd5EKe15Ei0wRppx70OT9Qsn9gNEBuMfN6Vupn3fFQcdTe/MctzYDgBoBKvQ88B4orengmUq6QNb9mf2bVq02lhplw3cQe7crFmJqnWnH1yKnl5O6ALRIO/UmBJXQ0ncg5XzQVGvZDbWf8Ag8ZARmvdvA8/iAjgcl0BK39g0QscwvpvaYEtI0k8og8VD9H8EadN1zLnFx7JJAs0T4T3q5suuI0voDwE8NbwipuqNqrsiuef4z0aB7wqXDYMsqF5Y6BmDRob756SFpA697DxPNcbU3X3TYxfdJF+5ZSaM4oqy9//AGn97nIbvWbqLe8Eq6bcwm5kdvsbVfJTTiN1No/L+66GYk6N8m/NXgDw0vblEDV8ZedpBKHSe8XMC33SR11Q3+yBp92Uv2XEn77R+n4BObgK51rAdB/ZaJ1VkRlIsN15HNRCeqyyN+v6M8aXv+wGzMLkeHVHuey4c06QQeF7GD3K1+2UD7GHc/8AII8XlQCRG+bW9/RU9baz6Dyww5ti3Wcp0E8tO5CVyHjUeDWNrP8AuYZo6uY33ApxNc/9KmPzn+hZ2h6XM+81w6QVOp+llE/ejqCElS+B7RMrGtvosPR/zYqXHYoCQ/DgcxkPyRcT6TU4OV4PeLKhxO2GON3+8p4qXtCyaQJ1Om98ZSwmwtHhuWjAbAEaf2VbsU55fl7OjSd53kDynqrcuKaTvgmhmYJSnF5MckwnklCI9yWZcXCVjCzdUiU6jXLHZmmChysYdKS5KSJhAJEJJIGFCHUBOYZiAYHZsQIAN763PekksYtdm4YEEu7W6/vVdQuDO4keBSSSR/cxn+1Dmb9bkkySbnXVdXEk4p0J0pJLGOSui+q6ksY4xoaAALDQcF2UkkDHWlEJJ1J0AHIDcuJImOsJn5id2sGyLg6Ac4NPjv0SSQ9Bj2DcwSeRPkU2UklgPsZiGtdAeMzRHZkgWuNE2niXPfUmPagW0i3wSSQQ3oKCkUkkwo1U/pJQDqZfo6mJB4g7jy+S6kjHsD6MU6qUN1QldSXSTG5jxVhsfCCrVDHExJmNSAJjlKSSD6Muze0mBrQGiABAA0ASLjxSSXMVGFx4rhHNJJYx2/zsJ8dy4GmTe3S470kljHSVwuXEkTHJSSSWMf/Z',
    ],
    ans: ['Блогеры и дороги ', 'Кейт', 'Семейка Адамс. Горячий тур'],
  },
  {
    type: images,
    img: [
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6e7548e6-3434-4cf3-b542-77fdbf669b6e/960x960',
      'https://resizer.mail.ru/p/54fce7fb-0413-5ac7-a6e6-68c388f765ac/dpr:200/AQACGVJhMJa8-lUcFtu3ZbQNLGAyt76JcbZYSVrUMrcetFU78-1oeOR6-GUYWI4PqY4lr1VD3no4h_UUJYjxBzG8JZI.jpg',
      'https://cdn.smartfacts.ru/440918/den-da.jpg',
    ],
    ans: ['Всем парням. С любовью ', 'Калейдоскоп поцелуев 3', 'День Да'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/145500/1006206.jpg',
      'https://media.kg-portal.ru/images/hesallthat/hesallthat_1.jpg',
      'https://s14.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/09/2-3.jpg',
    ],
    ans: ['Будь моим Кириллом', 'Это все он', 'Луна парк'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg102277_2.jpg',
      'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/378b8682-0dc7-43c0-99a2-02cfb0f1ad0b/960x960',
      'https://www.kino-teatr.ru/movie/kadr/145774/1008427.jpg',
    ],
    ans: ['Каштановый человечек', 'Увиденное и Услышанное', 'Лес самоубийц'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/147914/1045850.jpg',
      'https://yesmagazine.ru/media/cache/article_detail/uploads/articles/133/20210815/13369f298e587349eb79247e666d8cba.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101425_7.jpg',
    ],
    ans: ['Охотник за разумом. Схватка', 'Нефутбол', 'Виво '],
  },
  {
    type: images,
    img: [
      'https://www.vokrug.tv/pic/product/6/4/f/a/64fa867468d4698bb6a3d59628c9e504.jpg',
      'https://img.youtube.com/vi/IQSXaWIUeuo/hqdefault.jpg',
      'https://i.ytimg.com/vi/sutDVugX9RA/mqdefault.jpg',
    ],
    ans: ['Иваново счастье', 'Дракулов', 'Молоко '],
  },
  {
    type: images,
    img: [
      'https://resizer.mail.ru/p/10a690a9-3d6a-558f-9a6c-989309969773/dpr:200/AQACUOTXUSIXubzw7mhYBeB5gQRVYz4lC8PncB4RMXUd2saBAtVtosXzv_k0yaewx9hbKr8VdrxAHIrW2l4h5re5cgU.jpg',
      'https://images.kinorium.com/movie/shot/2578482/h280_46669479.jpg?21610667785',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg102541_2.jpg',
    ],
    ans: ['Чужая земля', 'Локдаун', 'Аркейн '],
  },
  {
    type: images,
    img: [
      'https://medialeaks.ru/wp-content/uploads/2020/11/2-2-1-600x376.jpg',
      'https://2datyvyhoda.ru/wp-content/uploads/2021/04/Andrej-Burkovskij-v-seriale-Mediator-2021.jpg',
      'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/33804/f98d3fbc3788b2a85a2c1cca3c4c3b8f/orig',
    ],
    ans: ['Симпсоны', 'Медиатор', 'Лунтик и его друзья  '],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/news/24793/218768.jpg',
      'https://www.soyuz.ru/public/uploads/files/2/7470901/202108101938097438908ce7.jpg',
      'https://www.vokrug.tv/pic/product/6/e/f/6/6ef600135259b4bafc5e26d1721abe5b.jpg',
    ],
    ans: ['Три кота', 'Люцифер', 'Ривердейл '],
  },
  {
    type: images,
    img: [
      'https://2datyvyhoda.ru/wp-content/uploads/2021/01/Ivanovy-Ivanovy-2021.jpg',
      'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2021/02/15c696db5f393cec4d5d0ffcef393c91-700x544.jpg',
      'https://img08.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/9/65/965cbcf374bb4a52d67d87d9c44ddd4c.jpg',
    ],
    ans: ['Ивановы Ивановы', 'Бывшие', 'Сокол и зимний солдат '],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/145065/994905.jpg',
      'https://www.vokrug.tv/pic/product/9/a/5/7/9a57ebfdc98c89fefc0b2725150fa46b.jpg',
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg92944_5.jpg',
    ],
    ans: ['Джинни и Джорджия', 'Чёрный список', 'Великая'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg102529_1.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg101361_4.jpg',
      'https://kinosvami.ru/wp-content/uploads/2021/11/zz6-1.jpg',
    ],
    ans: ['Дежурство', 'Новый вишневый вкус ', 'Неуловимый аромат любви'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg103371_4.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg103372_3.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg103055_3.jpg',
    ],
    ans: ['Доктор Бейн', 'Психиатр по соседству', 'Вторжение'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2020/shotimg/shotimg93920_1.jpg',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg103399_1.jpg',
      'https://www.soyuz.ru/public/uploads/files/5/7475236/1005x558_2021111419275706e9526b23.jpg',
    ],
    ans: ['Основание', 'Мальчик по имени Рождество', 'Красное уведомление'],
  },
  {
    type: images,
    img: [
      'https://www.kino-teatr.ru/movie/kadr/149112/1061489.jpg',
      'data:image/jpeg;base64,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',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg100840_3.jpg',
    ],
    ans: ['Уборщица. История матери одиночки', 'Яра', 'Армия воров'],
  },
  {
    type: images,
    img: [
      'https://images.kinorium.com/movie/shot/2576354/h280_50238121.jpg?21637510991',
      'https://www.kino-teatr.ru/movie/kadr/145059/1083619.jpg',
      'https://www.kino-teatr.ru/movie/kadr/143085/1092521.jpg',
    ],
    ans: ['Дед Мороз вернулся ', 'Глория', 'Универ. 10 лет спустя'],
  },
  {
    type: images,
    img: [
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg100441_7.jpg',
      'data:image/jpeg;base64,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',
      'https://www.kinonews.ru/insimgs/2021/shotimg/shotimg103435_2.jpg',
    ],
    ans: ['Чиновница', 'Коса', 'Реальная история'],
  },
];

export default task3;
