import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Без назвы",
    description: "Апісанне не прадстаўлена",
  },
  components: {
    callout: {
      note: "Заўвага",
      abstract: "Анатацыя",
      info: "Інфармацыя",
      todo: "Зрабіць",
      tip: "Парада",
      success: "Поспех",
      question: "Пытанне",
      warning: "Папярэджанне",
      failure: "Параза",
      danger: "Небяспека",
      bug: "Памылка",
      example: "Прыклад",
      quote: "Цытата",
    },
    backlinks: {
      title: "Зваротныя спасылкі",
      noBacklinksFound: "Зваротныя спасылкі не знойдзены",
    },
    themeToggle: {
      lightMode: "Светлы рэжым",
      darkMode: "Цёмны рэжым",
    },
    readerMode: {
      title: "Рэжым чытання",
    },
    explorer: {
      title: "Даследчык",
    },
    footer: {
      createdWith: "Створана з",
    },
    graph: {
      title: "Від графа",
    },
    recentNotes: {
      title: "Саветы",
      seeRemainingMore: ({ remaining }) => `Глядзіце яшчэ ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Транслюецца з ${targetSlug}`,
      linkToOriginal: "Спасылка на арыгінал",
    },
    search: {
      title: "Пошук",
      searchBarPlaceholder: "Пошук чагосьці",
    },
    tableOfContents: {
      title: "Змест",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} мін чытання`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Саветы",
      lastFewNotes: ({ count }) => `Апошнія ${count} саветаў`,
    },
    error: {
      title: "Не знойдзена",
      notFound: "Гэтая старонка або прыватная, або не існуе.",
      home: "Вярнуцца на галоўную старонку",
    },
    folderContent: {
      folder: "Тэчка",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 элемент у гэтай тэчцы." : `${count} элементаў у гэтай тэчцы.`,
    },
    tagContent: {
      tag: "Тэг",
      tagIndex: "Індэкс тэгаў",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 элемент з гэтым тегам." : `${count} элементаў з гэтым тегам.`,
      showingFirst: ({ count }) => `Паказаны першыя ${count} тэгаў.`,
      totalTags: ({ count }) => `Знойдзена ўсяго ${count} тэгаў.`,
    },
  },
} as const satisfies Translation
