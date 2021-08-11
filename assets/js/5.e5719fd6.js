(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(t,e,a){t.exports=a.p+"assets/img/Flutter-Architecture.e38dfe06.png"},234:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"architecture-layers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#architecture-layers","aria-hidden":"true"}},[t._v("#")]),t._v(" Architecture Layers")]),t._v(" "),s("p",[s("img",{attrs:{src:a(203),alt:"Architecture"}})]),t._v(" "),s("p",[t._v("Flutter projects should contain 4 distinct layers: "),s("strong",[t._v("presentation")]),t._v(", "),s("strong",[t._v("application")]),t._v(", "),s("strong",[t._v("domain")]),t._v(", and "),s("strong",[t._v("infrastructure")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"🥞-layer-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🥞-layer-definitions","aria-hidden":"true"}},[t._v("#")]),t._v(" 🥞 Layer Definitions")]),t._v(" "),s("h3",{attrs:{id:"✨-presentation-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✨-presentation-layer","aria-hidden":"true"}},[t._v("#")]),t._v(" ✨ Presentation Layer")]),t._v(" "),s("p",[t._v("The presentation layer should "),s("em",[t._v("only")]),t._v(" contain Widgets. Use this layer to implement your user interface.")]),t._v(" "),s("p",[t._v("As much as possible, Widget classes should be free of business logic. Form validation is a reasonable exception to this rule.")]),t._v(" "),s("p",[t._v("Classes in the presentation layer should depend on classes from the application and domain layers.")]),t._v(" "),s("h3",{attrs:{id:"🤖-application-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🤖-application-layer","aria-hidden":"true"}},[t._v("#")]),t._v(" 🤖 Application Layer")]),t._v(" "),s("p",[t._v("This is the main business logic layer of the application, and should contain BLoCs, Cubits, and use-cases.")]),t._v(" "),s("p",[t._v("These classes should depend on entity/value-object classes and repository interfaces from the domain layer.")]),t._v(" "),s("h3",{attrs:{id:"💭-domain-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💭-domain-layer","aria-hidden":"true"}},[t._v("#")]),t._v(" 💭 Domain Layer")]),t._v(" "),s("p",[t._v("Defines the core business domain, including entities, value-objects, and repository interfaces.")]),t._v(" "),s("p",[t._v("These classes should be pure Dart (no Flutter imports) and should not depend on any other layers.")]),t._v(" "),s("h3",{attrs:{id:"🗄-infrastructure-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🗄-infrastructure-layer","aria-hidden":"true"}},[t._v("#")]),t._v(" 🗄 Infrastructure Layer")]),t._v(" "),s("p",[t._v("This layer contains implementations of the repository interfaces from the domain layer. Repository implementations may depend on other classes like data sources or REST API services.")]),t._v(" "),s("p",[t._v("It's a good idea to use Data Transfer Objects (DTOs) which represent the structure of the data returned from external services. These can then be converted to and from your entity classes. This ensures the entities are not dependent on the data structure of objects returned from external services.")]),t._v(" "),s("h2",{attrs:{id:"💉-dependency-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💉-dependency-injection","aria-hidden":"true"}},[t._v("#")]),t._v(" 💉 Dependency Injection")]),t._v(" "),s("p",[s("code",[t._v("get_it")]),t._v(" + "),s("code",[t._v("injectable")]),t._v(" is a fantastic way of implementing dependency injection.")]),t._v(" "),s("p",[t._v("BLoCs and Cubits should be injected into the widget tree using "),s("code",[t._v("BlocProvider")]),t._v(". This allows the BLoC/Cubit to be accessible to all children via "),s("code",[t._v("BlocProvider.of(context)")]),t._v(". It also allows "),s("code",[t._v("BlocListener")]),t._v(", "),s("code",[t._v("BlocBuilder")]),t._v(", and "),s("code",[t._v("BlocConsumer")]),t._v(" to find instances automatically, and ensures the closure of underlying "),s("code",[t._v("Stream")]),t._v("s are handled automatically.")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BlocProvider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tcreate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" GetIt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyBloc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tchild"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BlocBuilder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyBloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MyState"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tbuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO Implement builder")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"📂-directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📂-directory-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" 📂 Directory Structure")]),t._v(" "),s("p",[t._v("The best directory structure usually involves having a directory for each layer. The layer directories are then subdivided into features.")]),t._v(" "),s("p",[t._v("Another option is to have top-level directories for each feature, which are then subdivided into layers.")]),t._v(" "),s("h2",{attrs:{id:"🏛-architecture-best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🏛-architecture-best-practices","aria-hidden":"true"}},[t._v("#")]),t._v(" 🏛 Architecture Best Practices")]),t._v(" "),s("ul",[s("li",[t._v("Stateful Widgets should only be used when absolutely necessary (e.g. when building a form). Most of the time, it's better to use a BLoC with a Stateless Widget.")]),t._v(" "),s("li",[t._v("As much as possible, classes should depend on interfaces (implemented as abstract classes in Dart), not implementations.")])])])},[],!1,null,null,null);e.default=r.exports}}]);