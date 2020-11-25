'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seedData = {
      'abc-news': 'https://s.abcnews.com/assets/beta/assets/abcn_images/abcnews_pearl_stacked.png',
      'al-jazeera-english': 'https://i.pinimg.com/originals/11/6e/d8/116ed80f298c8ee40551e9291a2273f6.png',
      'ars-technica': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ars_Technica_logo.svg/1863px-Ars_Technica_logo.svg.png',
      'associated-press': 'https://cdn-radiotime-logos.tunein.com/a33732g.png',
      'axios': 'https://vectorlogoseek.com/wp-content/uploads/2019/04/axios-vector-logo.png',
      'bbc-news': 'https://images-na.ssl-images-amazon.com/images/I/51uBrMfqN4L.png',
      'bbc-sport': 'https://images-na.ssl-images-amazon.com/images/I/41%2B8AtoCyXL.png',
      'bleacher-report': 'https://www.pngkit.com/png/full/103-1034053_bleacherreport-launches-up-your-game-campaign-w-bleacher.png',
      'bloomberg': 'https://www.conviva.com/wp-content/uploads/2019/12/Bloomberg-logo-.png',
      'business-insider': 'https://logos-download.com/wp-content/uploads/2016/09/Business_Insider_logo_wordmark_logotype.png',
      'cbc-news': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/CBC_News_Logo.svg/1200px-CBC_News_Logo.svg.png',
      'cbs-news': 'https://vectorlogoseek.com/wp-content/uploads/2019/08/cbs-news-vector-logo.png',
      'cnn': 'https://logos-download.com/wp-content/uploads/2016/02/CNN-Travel-logo.png',
      'entertainment-weekly': 'https://i.pinimg.com/originals/bd/69/9e/bd699e87c275349639aef779d92fde12.png',
      'espn': 'https://1000logos.net/wp-content/uploads/2017/01/ESPN-Logo.png',
      'fortune': 'https://offleashpr.com/wp-content/uploads/2017/06/fortune-logo.png',
      'fox-news': 'https://lh3.googleusercontent.com/l8woCU1YmtyKlkNOh2TNvQJj8P78Rm56JljLDUj-83YzD3OU6UCvqM-vzqpBOkOrW2Q=s180',
      'fox-sports': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Fox_Sports_Logo.svg/1200px-Fox_Sports_Logo.svg.png',
      'google-news': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Google-News_logo.png',
      'hacker-news': 'https://www.solosuit.com/assets/hacker-news1_logo-c6b9933e1bd8db44697993fd5cf2386ae9cab6d650276e1d0769fdceee1502aa.jpg',
      'independent': 'https://medicine.umich.edu/sites/default/files/Independent_logo_logotype.png',
      'mashable': 'https://vectorlogoseek.com/wp-content/uploads/2019/10/mashable-vector-logo.png',
      'medical-news-today': 'https://tukuz.com/wp-content/uploads/2020/02/medical-news-today-mnt-logo-vector.png',
      'msnbc': 'https://petergeorgescu.com/wp-content/uploads/2019/10/msnbc-logo-png-1920.png',
      'mtv-news': 'https://www.pngkey.com/png/full/57-579142_mtv-news-logo-png-yoostar-on-mtv-xbox.png',
      'national-geographic': 'https://logos-download.com/wp-content/uploads/2016/07/National_Geographic_logo.png',
      'national-review': 'https://www.nationalreview.com/wp-content/themes/national-review/static/images/logo.png',
      'nbc-news': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/NBC_News_2011.svg/633px-NBC_News_2011.svg.png',
      'new-scientist': 'https://media-exp1.licdn.com/dms/image/C560BAQHrL_brt8PGZQ/company-logo_200_200/0?e=2159024400&v=beta&t=7vv_QgmDxRHbC0piZMVSIg5uAs_pClV0NBUJpSsUjxQ',
      'newsweek': 'https://upload.wikimedia.org/wikipedia/commons/d/db/Newsweek_Logo.svg',
      'new-york-magazine': 'https://www.buildhappytogether.com/wp-content/uploads/2018/01/NYMag.png',
      'next-big-future': 'https://www.nextbigcoins.io/wp-content/uploads/2018/05/nextBIGfuture_diamond-287x300.png',
      'nfl-news': 'https://i.pinimg.com/originals/da/db/24/dadb24bf0fa7211a734137a73874da85.gif',
      'nhl-news': 'https://1000logos.net/wp-content/uploads/2017/05/NHL-Logo.png',
      'politico': 'https://americansforprosperity.org/wp-content/uploads/2015/12/vTU7bvBa.png',
      'recode': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Recode_logo_2016.svg/1280px-Recode_logo_2016.svg.png',
      'reuters': 'https://i1.wp.com/globalriskinsights.com/wp-content/uploads/2016/03/Reuters-Logo.jpg?ssl=1',
      'rte': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQ0nOn_AGYH_z8RU7FbD-QJJTasnirU9hPQ&usqp=CAU',
      'talksport': 'https://talksport.com/wp-content/uploads/sites/5/2018/06/cropped-App-Icon2.png?strip=all',
      'techcrunch': 'https://talkingbiznews.com/wp-content/uploads/2020/06/TechCrunch-Logo.png',
      'techradar': 'https://zmcommunications.com/assets/uploads/2016/11/techradar_logo.gif',
      'the-american-conservative': 'https://theamericanconservative.com/wp-content/uploads/2019/10/TAC-Profile-Fallback.png',
      'the-hill': 'https://www.nysenate.gov/sites/default/files/in-the-news/main-image/the_hill.jpg',
      'the-huffington-post': 'https://www.logo-designer.co/wp-content/uploads/2017/04/2017-huffpost-new-logo-design-2.png',
      'the-irish-times': 'https://www.thirdcoastpercussion.com/content/uploads/2019/10/Irish-Times-Logo.jpg',
      'the-sport-bible': 'https://pbs.twimg.com/profile_images/1247889793255538688/NqA3Fe7q.jpg',
      'the-verge': 'https://assets.fontsinuse.com/static/use-media-items/16/15689/full-1000x924/56702b75/The_Verge_logo.png?resolution=0',
      'the-wall-street-journal': 'https://www.kinderinstitute.com/wp-content/uploads/2019/10/Wall-Street-Journal-Logo.png',
      'the-washington-post': 'https://www.thewrap.com/wp-content/uploads/2020/07/Washington-Post-logo-618x400.jpg',
      'time': 'https://www.nysenate.gov/sites/default/files/in-the-news/main-image/time_magazine.jpg',
      'usa-today': 'https://www.bissellpetfoundation.org/wp-content/uploads/2020/05/usa-today-logo.jpg',
      'vice-news': 'https://latinocf.org/wp-content/uploads/2019/12/Vice-News.jpg',
      'wired': 'https://upskill.io/wp-content/uploads/2017/07/wired-logo.jpg',
    }

    const sources = await db.Source.findAll()

    await Promise.all(sources.map(async(source) => {
      const key = source.encodedName
      const dbModel = await db.Source.findOne({ 
        where: { encodedName: key }
      })
      await dbModel.update({
        imageUrl: seedData[key]
      })
    }))

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
