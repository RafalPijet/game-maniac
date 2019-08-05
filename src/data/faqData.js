const faqData = [
    {
        ask: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        answer: "Vivamus euismod bibendum lorem, vitae porta nisi vestibulum quis. Ut cursus orci sed nisl faucibus facilisis. Sed in commodo erat. Proin quis auctor sapien, vel blandit arcu. Aliquam tempus massa eros, non rutrum elit aliquet et. Praesent faucibus diam nec posuere accumsan. Duis vulputate egestas augue, nec aliquet mauris dignissim eget. Curabitur vulputate interdum sapien, et aliquam urna blandit quis. Sed a posuere ex, laoreet pulvinar nibh. Maecenas elementum nisl a tellus fringilla finibus. Donec ullamcorper ex vitae turpis fringilla, ac dictum ante consequat."
    },
    {
        ask: "Sed cursus libero nec iaculis semper",
        answer: "Duis scelerisque augue ac vehicula viverra. Ut facilisis dolor ac ex ultricies, at gravida nunc mattis. Sed consectetur at mi vel consequat. Integer vehicula dolor at urna laoreet malesuada. Suspendisse pretium ligula enim, sed dapibus felis dapibus ac. Maecenas dignissim nisl sed magna fermentum suscipit. Vestibulum odio nisl, rhoncus sed dapibus viverra, aliquam in libero."
    },
    {
        ask: "Praesent massa justo, pretium id maximus eu, blandit at ante",
        answer: "Vivamus euismod bibendum lorem, vitae porta nisi vestibulum quis. Ut cursus orci sed nisl faucibus facilisis. Sed in commodo erat. Proin quis auctor sapien, vel blandit arcu. Aliquam tempus massa eros, non rutrum elit aliquet et. Praesent faucibus diam nec posuere accumsan. Duis vulputate egestas augue, nec aliquet mauris dignissim eget. Curabitur vulputate interdum sapien, et aliquam urna blandit quis. Sed a posuere ex, laoreet pulvinar nibh. Maecenas elementum nisl a tellus fringilla finibus. Donec ullamcorper ex vitae turpis fringilla, ac dictum ante consequat."
    },
    {
        ask: "Praesent faucibus diam nec posuere accumsan",
        answer: "In euismod massa leo, sed feugiat justo rutrum at. Nam lacinia urna ac porttitor pulvinar. Donec suscipit eros id nulla ornare porttitor. Suspendisse eget varius nulla. Phasellus a hendrerit ipsum. Curabitur eget imperdiet turpis. Phasellus sodales quis turpis ut maximus. Aenean consectetur ex ac nisi laoreet, vitae lacinia erat tincidunt. Maecenas eget sapien nec neque elementum lacinia sagittis id dui. Nulla sodales pharetra est. Pellentesque tristique a erat suscipit rhoncus. Ut nec risus sit amet lorem dictum semper non vitae ipsum. Nam in turpis lorem. Sed vitae urna feugiat, posuere mauris id, sollicitudin arcu. Sed pretium scelerisque rutrum."
    },
    {
        ask: "Suspendisse pretium ligula enim",
        answer: "Aliquam tempus massa eros, non rutrum elit aliquet et. Praesent faucibus diam nec posuere accumsan. Duis vulputate egestas augue, nec aliquet mauris dignissim eget. Curabitur vulputate interdum sapien, et aliquam urna blandit quis. Sed a posuere ex, laoreet pulvinar nibh. Maecenas elementum nisl a tellus fringilla finibus. Donec ullamcorper ex vitae turpis fringilla, ac dictum ante consequat."
    },
    {
        ask: "Phasellus a hendrerit ipsum",
        answer: "estibulum in auctor magna. Sed sed quam vitae lorem hendrerit dapibus. Donec et sollicitudin est, malesuada facilisis sapien. Aliquam lobortis ipsum sit amet volutpat rutrum. Pellentesque lobortis felis eu mauris ultricies, ut viverra elit auctor. Integer ex turpis, congue quis laoreet vulputate, maximus eget eros. Praesent luctus ligula odio. Vivamus nulla diam, dapibus feugiat sagittis nec, euismod non enim. Praesent neque nunc, tincidunt ac pellentesque quis, placerat quis metus. Mauris quis ante ipsum. Proin feugiat, ligula non gravida dapibus, quam dolor ullamcorper velit, ac blandit quam velit congue orci. Nam nec turpis dui."
    },
    {
        ask: "Ut at massa viverra, aliquet magna eu, viverra lacus",
        answer: "Pellentesque molestie lacus est, ac mattis lorem consectetur et. Mauris vulputate commodo eros vitae placerat. Mauris ut cursus quam. Integer pulvinar, sapien quis fermentum posuere, est dui luctus sem, eu aliquam velit nisl a ligula. Fusce faucibus nunc enim, sollicitudin vehicula lectus luctus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper tortor id ante egestas, at mattis nisl congue. Aliquam imperdiet commodo mauris finibus maximus. Nam faucibus facilisis purus, non malesuada massa varius fermentum. Morbi et semper nibh. Pellentesque volutpat at velit eu vehicula. Nunc ultrices, felis sit amet interdum convallis, ex justo interdum sapien, et feugiat elit sapien vel metus. Nam porta tincidunt porttitor. Vivamus sit amet justo feugiat, fermentum metus nec, sodales felis."
    },
    {
        ask: "Morbi condimentum consequat eros ac convallis",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper urna sagittis blandit lobortis. Nunc varius enim vitae tortor auctor, ac pellentesque nunc semper. Integer sem enim, ultricies id erat eu, ornare dapibus lectus. Nunc id nibh nisi. Ut ultrices iaculis nunc eleifend eleifend. Praesent porttitor, libero eu mattis pellentesque, quam ipsum egestas nulla, nec accumsan orci enim non ante. Suspendisse quam augue, euismod eu sem vitae, fermentum ultricies diam. Nam urna nunc, ultrices vel cursus vel, efficitur in nulla. Pellentesque in facilisis enim. Nunc fermentum sodales augue elementum semper. Fusce sit amet lacus in arcu sagittis interdum ut id felis. Donec varius in ligula id placerat. Praesent luctus ac mauris eget dapibus. Duis non neque in orci fermentum laoreet et eu quam."
    },
    {
        ask: "Praesent congue porta turpis, sit amet feugiat neque elementum quis. Aliquam erat volutpat",
        answer: "Quisque quis ligula elit. Nunc a ex nibh. Cras ultricies elementum porttitor. Integer orci ante, sollicitudin nec rhoncus efficitur, blandit cursus sapien. In nisl orci, hendrerit mollis diam eu, consectetur auctor orci. Integer interdum ultrices leo, vitae facilisis nibh porta et. Nullam ultrices, turpis eget imperdiet scelerisque, est dui cursus lacus, sed varius turpis dolor ac diam. Morbi condimentum consequat eros ac convallis. Aenean vel tellus porta, sodales justo sit amet, malesuada turpis. Sed suscipit tellus nec egestas eleifend. Pellentesque dapibus rhoncus diam ac porta. Proin ullamcorper orci nec orci rutrum, sed gravida sem luctus."
    },
    {
        ask: "Duis non neque in orci fermentum laoreet et eu quam",
        answer: "Praesent luctus ligula odio. Vivamus nulla diam, dapibus feugiat sagittis nec, euismod non enim. Praesent neque nunc, tincidunt ac pellentesque quis, placerat quis metus. Mauris quis ante ipsum. Proin feugiat, ligula non gravida dapibus, quam dolor ullamcorper velit, ac blandit quam velit congue orci. Nam nec turpis dui."
    },
    {
        ask: "Nunc fermentum sodales augue elementum semper",
        answer: "Vestibulum in auctor magna. Sed sed quam vitae lorem hendrerit dapibus. Donec et sollicitudin est, malesuada facilisis sapien. Aliquam lobortis ipsum sit amet volutpat rutrum. Pellentesque lobortis felis eu mauris ultricies, ut viverra elit auctor. Integer ex turpis, congue quis laoreet vulputate, maximus eget eros. Praesent luctus ligula odio. Vivamus nulla diam, dapibus feugiat sagittis nec, euismod non enim. Praesent neque nunc, tincidunt ac pellentesque quis, placerat quis metus. Mauris quis ante ipsum. Proin feugiat, ligula non gravida dapibus, quam dolor ullamcorper velit, ac blandit quam velit congue orci. Nam nec turpis dui."
    },
    {
        ask: "Curabitur gravida magna at nibh facilisis pharetra",
        answer: "Vestibulum in auctor magna. Sed sed quam vitae lorem hendrerit dapibus. Donec et sollicitudin est, malesuada facilisis sapien. Aliquam lobortis ipsum sit amet volutpat rutrum. Pellentesque lobortis felis eu mauris ultricies, ut viverra elit auctor. Integer ex turpis, congue quis laoreet vulputate, maximus eget eros. Praesent luctus ligula odio. Vivamus nulla diam, dapibus feugiat sagittis nec, euismod non enim. Praesent neque nunc, tincidunt ac pellentesque quis, placerat quis metus. Mauris quis ante ipsum. Proin feugiat, ligula non gravida dapibus, quam dolor ullamcorper velit, ac blandit quam velit congue orci. Nam nec turpis dui."
    },
    {
        ask: "Praesent porttitor, libero eu mattis pellentesque, quam ipsum egestas nulla, nec accumsan orci enim non ante",
        answer: "Quisque quis ligula elit. Nunc a ex nibh. Cras ultricies elementum porttitor. Integer orci ante, sollicitudin nec rhoncus efficitur, blandit cursus sapien. In nisl orci, hendrerit mollis diam eu, consectetur auctor orci. Integer interdum ultrices leo, vitae facilisis nibh porta et. Nullam ultrices, turpis eget imperdiet scelerisque, est dui cursus lacus, sed varius turpis dolor ac diam. Morbi condimentum consequat eros ac convallis. Aenean vel tellus porta, sodales justo sit amet, malesuada turpis. Sed suscipit tellus nec egestas eleifend. Pellentesque dapibus rhoncus diam ac porta. Proin ullamcorper orci nec orci rutrum, sed gravida sem luctus. Quisque vulputate ex eu purus suscipit condimentum. Praesent congue porta turpis, sit amet feugiat neque elementum quis. Aliquam erat volutpat."
    },
    {
        ask: "Sed suscipit tellus nec egestas eleifend",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper urna sagittis blandit lobortis. Nunc varius enim vitae tortor auctor, ac pellentesque nunc semper. Integer sem enim, ultricies id erat eu, ornare dapibus lectus. Nunc id nibh nisi. Ut ultrices iaculis nunc eleifend eleifend. Praesent porttitor, libero eu mattis pellentesque, quam ipsum egestas nulla, nec accumsan orci enim non ante. Suspendisse quam augue, euismod eu sem vitae, fermentum ultricies diam. Nam urna nunc, ultrices vel cursus vel, efficitur in nulla. Pellentesque in facilisis enim. Nunc fermentum sodales augue elementum semper. Fusce sit amet lacus in arcu sagittis interdum ut id felis. Donec varius in ligula id placerat. Praesent luctus ac mauris eget dapibus. Duis non neque in orci fermentum laoreet et eu quam."
    },
    {
        ask: "Quisque eu augue non lectus efficitur molestie at vitae orci. In quis congue nisi, ac iaculis purus. Sed non consequat tellus",
        answer: "Donec sed dui mattis, ornare purus fringilla, feugiat nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ut massa pellentesque, ullamcorper nibh in, auctor orci. Cras fringilla fermentum arcu, sed imperdiet ligula porta at. Donec in est ante. Suspendisse quis vestibulum mauris. Nullam pretium tincidunt commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tortor urna, consequat ut tortor laoreet, luctus luctus tellus. Pellentesque varius ex ut leo sodales semper. Proin a commodo nunc."
    },
    {
        ask: "Etiam a lectus velit",
        answer: "Phasellus cursus ante diam, vitae tincidunt tellus placerat eu. Nulla est nunc, tempor vitae est ac, porta bibendum nisl. Quisque placerat nibh risus, a consectetur lacus posuere id. Nam finibus eros in convallis auctor. Aliquam viverra quam id ligula ultrices volutpat. Vivamus maximus elit sit amet faucibus semper. Nunc varius mi eget gravida interdum. Maecenas rhoncus neque at ullamcorper dapibus. Ut lobortis hendrerit nunc nec tempor.",
    },
    {
        ask: "Suspendisse ex neque, efficitur eget tincidunt et, accumsan ut mi",
        answer: "Duis pretium feugiat commodo. Nulla blandit mauris quam. Nullam dictum dolor eu iaculis consectetur. Duis mi sapien, convallis ut malesuada quis, auctor vitae turpis. Praesent sit amet odio vitae ipsum pretium auctor."
    },
    {
        ask: "Fusce in turpis lobortis, fringilla justo gravida, fringilla tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ornare lorem tellus, in dictum leo venenatis et",
        answer: "Donec sed dui mattis, ornare purus fringilla, feugiat nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ut massa pellentesque, ullamcorper nibh in, auctor orci. Cras fringilla fermentum arcu, sed imperdiet ligula porta at. Donec in est ante. Suspendisse quis vestibulum mauris. Nullam pretium tincidunt commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi tortor urna, consequat ut tortor laoreet, luctus luctus tellus. Pellentesque varius ex ut leo sodales semper. Proin a commodo nunc."
    },
    {
        ask: "Duis pretium feugiat commodo",
        answer: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis pretium feugiat commodo. Nulla blandit mauris quam. Nullam dictum dolor eu iaculis consectetur. Duis mi sapien, convallis ut malesuada quis, auctor vitae turpis. Praesent sit amet odio vitae ipsum pretium auctor."
    },
    {
        ask: "Class aptent taciti sociosqu ad litora torquent per conubia nostra",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in turpis lobortis, fringilla justo gravida, fringilla tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ornare lorem tellus, in dictum leo venenatis et. Nunc massa massa, fermentum id sollicitudin et, vulputate sed urna. Integer pellentesque neque a erat fringilla, ac suscipit lacus ornare. Fusce bibendum a metus et mollis. Morbi fringilla sem a hendrerit auctor. Donec et eros a ligula fermentum ultricies pulvinar non tellus. Nunc at vestibulum turpis. Etiam a lectus velit." +
            "Phasellus cursus ante diam, vitae tincidunt tellus placerat eu. Nulla est nunc, tempor vitae est ac, porta bibendum nisl. Quisque placerat nibh risus, a consectetur lacus posuere id. Nam finibus eros in convallis auctor. Aliquam viverra quam id ligula ultrices volutpat. Vivamus maximus elit sit amet faucibus semper. Nunc varius mi eget gravida interdum. Maecenas rhoncus neque at ullamcorper dapibus. Ut lobortis hendrerit nunc nec tempor."
    },
    {
        ask: "Mauris magna ex",
        answer: "Phasellus augue arcu, aliquet sit amet cursus consequat, facilisis quis enim. Donec ut dapibus ante. Praesent ac maximus odio. Integer nec pulvinar lectus, eget aliquet felis. Mauris venenatis eros sit amet magna efficitur tempus. Etiam consequat nunc ac quam ultricies, convallis maximus libero feugiat. Curabitur quis convallis ligula. Proin eu euismod augue. Sed ultricies, est luctus scelerisque finibus, libero tortor ullamcorper justo, in pretium lorem neque vel turpis. Integer arcu magna, tincidunt vel leo eu, imperdiet aliquet est. Aliquam vel sapien aliquet, fringilla est ut, sodales nibh."
    }
];

export default faqData;
