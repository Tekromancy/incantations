export interface TypeMeta {
	badge: string;
	badgeClass: string;
	fullHeader: string;
	formulaTag: string;
	glow: string;
}

export const DEFAULT_TYPE_META: TypeMeta = {
	badge: "✨ ARCANUM RUNE",
	badgeClass: "bg-white/10 border-white/20 text-gray-300",
	fullHeader: "// CODEX INCANTATION //",
	formulaTag: "$_ EXEC",
	glow: "bg-[#a855f7]",
};

export const TYPE_META_MAP: Record<string, TypeMeta> = {
  "shell": {
    "badge": "⚡ SHELL ONE-LINER",
    "badgeClass": "bg-[#38bdf8]/15 border-[#38bdf8]/50 text-[#38bdf8]",
    "fullHeader": "// EXECUTABLE SHELL ONELINER //",
    "formulaTag": "$_ EXEC_SHELL",
    "glow": "bg-[#38bdf8]"
  },
  "script": {
    "badge": "📜 BASH SCRIPT",
    "badgeClass": "bg-[#22EE44]/15 border-[#22EE44]/50 text-[#22EE44]",
    "fullHeader": "// EXECUTABLE BASH SCRIPT //",
    "formulaTag": "#!/usr/bin/env bash",
    "glow": "bg-[#22EE44]"
  },
  "prompt": {
    "badge": "🧠 AI PROMPT PATTERN",
    "badgeClass": "bg-[#c084fc]/15 border-[#c084fc]/50 text-[#c084fc]",
    "fullHeader": "// NEURAL PROMPT DIRECTIVE //",
    "formulaTag": ">> PROMPT_DIRECTIVE",
    "glow": "bg-[#c084fc]"
  },
  "python": {
    "badge": "🐍 PYTHON SCRIPT",
    "badgeClass": "bg-[#eab308]/15 border-[#eab308]/50 text-[#eab308]",
    "fullHeader": "// EXECUTABLE PYTHON PATTERN //",
    "formulaTag": "#!/usr/bin/env python3",
    "glow": "bg-[#eab308]"
  },
  "rust": {
    "badge": "🦀 RUST PATTERN",
    "badgeClass": "bg-[#f97316]/15 border-[#f97316]/50 text-[#f97316]",
    "fullHeader": "// RUST IDIOMATIC PATTERN //",
    "formulaTag": "// cargo run --bin spell",
    "glow": "bg-[#f97316]"
  },
  "perl": {
    "badge": "🐪 PERL INCANTATION",
    "badgeClass": "bg-[#818cf8]/15 border-[#818cf8]/50 text-[#818cf8]",
    "fullHeader": "// EXECUTABLE PERL INCANTATION //",
    "formulaTag": "#!/usr/bin/env perl",
    "glow": "bg-[#818cf8]"
  },
  "javascript": {
    "badge": "🟨 JAVASCRIPT PATTERN",
    "badgeClass": "bg-[#fde047]/15 border-[#fde047]/50 text-[#fde047]",
    "fullHeader": "// JAVASCRIPT IDIOMATIC PATTERN //",
    "formulaTag": "// node --harmony",
    "glow": "bg-[#fde047]"
  },
  "cpp": {
    "badge": "⚙️ C++ SPELL",
    "badgeClass": "bg-[#f43f5e]/15 border-[#f43f5e]/50 text-[#f43f5e]",
    "fullHeader": "// EXECUTABLE C++ PATTERN //",
    "formulaTag": "// g++ -std=c++20 spell.cpp",
    "glow": "bg-[#f43f5e]"
  },
  "go": {
    "badge": "🐹 GO RUNE",
    "badgeClass": "bg-[#06b6d4]/15 border-[#06b6d4]/50 text-[#06b6d4]",
    "fullHeader": "// EXECUTABLE GO PATTERN //",
    "formulaTag": "// go run main.go",
    "glow": "bg-[#06b6d4]"
  },
  "lisp": {
    "badge": "((🔮)) LISP RUNES",
    "badgeClass": "bg-[#8b5cf6]/15 border-[#8b5cf6]/50 text-[#8b5cf6]",
    "fullHeader": "// ANCIENT LISP METAMAGIC //",
    "formulaTag": ";; sbcl --script",
    "glow": "bg-[#8b5cf6]"
  },
  "haskell": {
    "badge": "λ HASKELL SIGILS",
    "badgeClass": "bg-[#67e8f9]/15 border-[#67e8f9]/50 text-[#67e8f9]",
    "fullHeader": "// PURE FUNCTIONAL VOID SIGIL //",
    "formulaTag": "-- runhaskell",
    "glow": "bg-[#67e8f9]"
  },
  "ruby": {
    "badge": "♦️ RUBY ENCHANTMENTS",
    "badgeClass": "bg-[#ef4444]/15 border-[#ef4444]/50 text-[#ef4444]",
    "fullHeader": "// DYNAMIC RUBY BLOOD MAGIC //",
    "formulaTag": "# ruby -W0",
    "glow": "bg-[#ef4444]"
  },
  "assembly": {
    "badge": "⚙️ BARE METAL RUNES",
    "badgeClass": "bg-[#94a3b8]/15 border-[#94a3b8]/50 text-[#94a3b8]",
    "fullHeader": "// BARE METAL ARCHITECTURE RUNE //",
    "formulaTag": "; nasm -f elf64",
    "glow": "bg-[#94a3b8]"
  },
  "elixir": {
    "badge": "💧 ELIXIR ALCHEMY",
    "badgeClass": "bg-[#60a5fa]/15 border-[#60a5fa]/50 text-[#60a5fa]",
    "fullHeader": "// CONCURRENT ACTOR-MODEL ALCHEMY //",
    "formulaTag": "# elixir",
    "glow": "bg-[#60a5fa]"
  },
  "solidity": {
    "badge": "⛓️ SOLIDITY PACTS",
    "badgeClass": "bg-[#64748b]/15 border-[#64748b]/50 text-[#64748b]",
    "fullHeader": "// IMMUTABLE DECENTRALIZED PACT //",
    "formulaTag": "// solc --bin",
    "glow": "bg-[#64748b]"
  },
  "prolog": {
    "badge": "🦉 PROLOG ORACLE",
    "badgeClass": "bg-[#14b8a6]/15 border-[#14b8a6]/50 text-[#14b8a6]",
    "fullHeader": "// PROLOG PATTERN //",
    "formulaTag": "% swipl -q -s",
    "glow": "bg-[#14b8a6]"
  },
  "apl": {
    "badge": "👽 APL GLYPHS",
    "badgeClass": "bg-[#a3e635]/15 border-[#a3e635]/50 text-[#a3e635]",
    "fullHeader": "// APL PATTERN //",
    "formulaTag": "⍝ Dyalog APL",
    "glow": "bg-[#a3e635]"
  },
  "fortran": {
    "badge": "🧮 FORTRAN MONOLITH",
    "badgeClass": "bg-[#8b5cf6]/15 border-[#8b5cf6]/50 text-[#8b5cf6]",
    "fullHeader": "// FORTRAN PATTERN //",
    "formulaTag": "! gfortran",
    "glow": "bg-[#8b5cf6]"
  },
  "cobol": {
    "badge": "💀 COBOL NECROMANCY",
    "badgeClass": "bg-[#475569]/15 border-[#475569]/50 text-[#475569]",
    "fullHeader": "// COBOL PATTERN //",
    "formulaTag": "*> cobc -x",
    "glow": "bg-[#475569]"
  },
  "java": {
    "badge": "☕ JAVA CATHEDRAL",
    "badgeClass": "bg-[#f43f5e]/15 border-[#f43f5e]/50 text-[#f43f5e]",
    "fullHeader": "// JAVA PATTERN //",
    "formulaTag": "// javac & java",
    "glow": "bg-[#f43f5e]"
  },
  "wasm": {
    "badge": "🕸️ WASM HOMUNCULUS",
    "badgeClass": "bg-[#6366f1]/15 border-[#6366f1]/50 text-[#6366f1]",
    "fullHeader": "// WASM PATTERN //",
    "formulaTag": ";; wat2wasm",
    "glow": "bg-[#6366f1]"
  },
  "julia": {
    "badge": "🔮 JULIA ASTROMANCY",
    "badgeClass": "bg-[#d946ef]/15 border-[#d946ef]/50 text-[#d946ef]",
    "fullHeader": "// JULIA PATTERN //",
    "formulaTag": "# julia",
    "glow": "bg-[#d946ef]"
  },
  "zig": {
    "badge": "⚡ ZIG ALCHEMY",
    "badgeClass": "bg-[#fde047]/15 border-[#fde047]/50 text-[#fde047]",
    "fullHeader": "// BLAZING-FAST ZIG ALCHEMY //",
    "formulaTag": "// zig run",
    "glow": "bg-[#fde047]"
  },
  "forth": {
    "badge": "🥞 FORTH STACK",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// FORTH PATTERN //",
    "formulaTag": "$ FORTH_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "smalltalk": {
    "badge": "📚 SMALLTALK SEANCE",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// SMALLTALK PATTERN //",
    "formulaTag": "$ SMALLTALK_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "ada": {
    "badge": "🛡️ ADA ABJURATION",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// ADA PATTERN //",
    "formulaTag": "$ ADA_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "sql": {
    "badge": "🗄️ SQL PACT",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// SQL PATTERN //",
    "formulaTag": "$ SQL_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "lua": {
    "badge": "🌙 LUA GLYPH",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// LUA PATTERN //",
    "formulaTag": "$ LUA_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "r": {
    "badge": "🎲 R HARUSPEX",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// R PATTERN //",
    "formulaTag": "$ R_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "php": {
    "badge": "🐘 PHP CURSE",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// PHP PATTERN //",
    "formulaTag": "$ PHP_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "vhdl": {
    "badge": "🖥️ VHDL GOLEM",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// VHDL PATTERN //",
    "formulaTag": "$ VHDL_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "brainfuck": {
    "badge": "🐙 ABYSSAL RUNES",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// BRAINFUCK PATTERN //",
    "formulaTag": "$ BRAINFUCK_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "erlang": {
    "badge": "☎️ ERLANG HIVE",
    "badgeClass": "bg-white/10 border-white/20 text-gray-300",
    "fullHeader": "// ERLANG PATTERN //",
    "formulaTag": "$ ERLANG_EXEC",
    "glow": "bg-[#a855f7]"
  },
  "clojure": {
    "badge": "🟢 CLOJURE GLYPHS",
    "badgeClass": "bg-[#84cc16]/15 border-[#84cc16]/50 text-[#84cc16]",
    "fullHeader": "// CLOJURE PATTERN //",
    "formulaTag": ";; clj -M",
    "glow": "bg-[#84cc16]"
  },
  "scala": {
    "badge": "🔴 SCALA ALCHEMY",
    "badgeClass": "bg-[#dc2626]/15 border-[#dc2626]/50 text-[#dc2626]",
    "fullHeader": "// SCALA PATTERN //",
    "formulaTag": "// scala",
    "glow": "bg-[#dc2626]"
  },
  "swift": {
    "badge": "🕊️ SWIFT ENCHANTMENTS",
    "badgeClass": "bg-[#f97316]/15 border-[#f97316]/50 text-[#f97316]",
    "fullHeader": "// SWIFT PATTERN //",
    "formulaTag": "// swift run",
    "glow": "bg-[#f97316]"
  },
  "kotlin": {
    "badge": "🟣 KOTLIN HEXES",
    "badgeClass": "bg-[#a855f7]/15 border-[#a855f7]/50 text-[#a855f7]",
    "fullHeader": "// KOTLIN PATTERN //",
    "formulaTag": "// kotlinc -script",
    "glow": "bg-[#a855f7]"
  },
  "algol": {
    "badge": "📜 ALGOL SCROLLS",
    "badgeClass": "bg-[#d97706]/15 border-[#d97706]/50 text-[#d97706]",
    "fullHeader": "// ALGOL PATTERN //",
    "formulaTag": "COMMENT Algol 68",
    "glow": "bg-[#d97706]"
  },
  "b": {
    "badge": "🧱 B PRECURSOR",
    "badgeClass": "bg-[#475569]/15 border-[#475569]/50 text-[#475569]",
    "fullHeader": "// B PATTERN //",
    "formulaTag": "/* b compile */",
    "glow": "bg-[#475569]"
  },
  "pascal": {
    "badge": "📐 PASCAL WARDS",
    "badgeClass": "bg-[#0ea5e9]/15 border-[#0ea5e9]/50 text-[#0ea5e9]",
    "fullHeader": "// PASCAL PATTERN //",
    "formulaTag": "{ fpc }",
    "glow": "bg-[#0ea5e9]"
  },
  "ocaml": {
    "badge": "🐪 OCAML METAMAGIC",
    "badgeClass": "bg-[#f59e0b]/15 border-[#f59e0b]/50 text-[#f59e0b]",
    "fullHeader": "// OCAML PATTERN //",
    "formulaTag": "(* ocamlopt *)",
    "glow": "bg-[#f59e0b]"
  },
  "fsharp": {
    "badge": "💠 F# SIGILS",
    "badgeClass": "bg-[#3b82f6]/15 border-[#3b82f6]/50 text-[#3b82f6]",
    "fullHeader": "// FSHARP PATTERN //",
    "formulaTag": "// dotnet fsi",
    "glow": "bg-[#3b82f6]"
  },
  "dart": {
    "badge": "🎯 DART SPELLS",
    "badgeClass": "bg-[#06b6d4]/15 border-[#06b6d4]/50 text-[#06b6d4]",
    "fullHeader": "// DART PATTERN //",
    "formulaTag": "// dart run",
    "glow": "bg-[#06b6d4]"
  },
  "actionscript": {
    "badge": "🎞️ ACTIONSCRIPT WARD",
    "badgeClass": "bg-[#f50f22]/15 border-[#f50f22]/50 text-[#f50f22]",
    "fullHeader": "// ACTIONSCRIPT PATTERN //",
    "formulaTag": "// asc",
    "glow": "bg-[#f50f22]"
  },
  "coldfusion": {
    "badge": "❄️ COLDFUSION TAG",
    "badgeClass": "bg-[#2c99d4]/15 border-[#2c99d4]/50 text-[#2c99d4]",
    "fullHeader": "// COLDFUSION PATTERN //",
    "formulaTag": "<!-- cf -->",
    "glow": "bg-[#2c99d4]"
  },
  "delphi": {
    "badge": "🏛️ DELPHI ORACLE",
    "badgeClass": "bg-[#ee1f35]/15 border-[#ee1f35]/50 text-[#ee1f35]",
    "fullHeader": "// DELPHI PATTERN //",
    "formulaTag": "{ dcc32 }",
    "glow": "bg-[#ee1f35]"
  },
  "vb": {
    "badge": "🖥️ VB CURSE",
    "badgeClass": "bg-[#00539c]/15 border-[#00539c]/50 text-[#00539c]",
    "fullHeader": "// VB PATTERN //",
    "formulaTag": "' vbc",
    "glow": "bg-[#00539c]"
  },
  "logo": {
    "badge": "🐢 LOGO DIVINATION",
    "badgeClass": "bg-[#ff9900]/15 border-[#ff9900]/50 text-[#ff9900]",
    "fullHeader": "// LOGO PATTERN //",
    "formulaTag": "; ucblogo",
    "glow": "bg-[#ff9900]"
  },
  "foxpro": {
    "badge": "🦊 FOXPRO APPARITION",
    "badgeClass": "bg-[#808080]/15 border-[#808080]/50 text-[#808080]",
    "fullHeader": "// FOXPRO PATTERN //",
    "formulaTag": "* vfp",
    "glow": "bg-[#808080]"
  },
  "pli": {
    "badge": "🏢 PL/I MONOLITH",
    "badgeClass": "bg-[#0f3d54]/15 border-[#0f3d54]/50 text-[#0f3d54]",
    "fullHeader": "// PLI PATTERN //",
    "formulaTag": "/* pl/i */",
    "glow": "bg-[#0f3d54]"
  },
  "snobol": {
    "badge": "❄️ SNOBOL HEX",
    "badgeClass": "bg-[#5e5e5e]/15 border-[#5e5e5e]/50 text-[#5e5e5e]",
    "fullHeader": "// SNOBOL PATTERN //",
    "formulaTag": "* snobol4",
    "glow": "bg-[#5e5e5e]"
  },
  "simula": {
    "badge": "🕰️ SIMULA GENESIS",
    "badgeClass": "bg-[#0088cc]/15 border-[#0088cc]/50 text-[#0088cc]",
    "fullHeader": "// SIMULA PATTERN //",
    "formulaTag": "!- simula",
    "glow": "bg-[#0088cc]"
  },
  "tcl": {
    "badge": "🔧 TCL GLYPH",
    "badgeClass": "bg-[#226a8d]/15 border-[#226a8d]/50 text-[#226a8d]",
    "fullHeader": "// TCL PATTERN //",
    "formulaTag": "# tclsh",
    "glow": "bg-[#226a8d]"
  },
  "nim": {
    "badge": "🐍 NIM SERPENT",
    "badgeClass": "bg-[#ffc200]/15 border-[#ffc200]/50 text-[#ffc200]",
    "fullHeader": "// NIM PATTERN //",
    "formulaTag": "# nim c",
    "glow": "bg-[#ffc200]"
  },
  "crystal": {
    "badge": "💎 CRYSTAL GEM",
    "badgeClass": "bg-[#e8e8e8]/15 border-[#e8e8e8]/50 text-[#e8e8e8]",
    "fullHeader": "// CRYSTAL PATTERN //",
    "formulaTag": "# crystal run",
    "glow": "bg-[#e8e8e8]"
  },
  "v": {
    "badge": "⚡ V SIGIL",
    "badgeClass": "bg-[#4f87c4]/15 border-[#4f87c4]/50 text-[#4f87c4]",
    "fullHeader": "// V PATTERN //",
    "formulaTag": "// v run",
    "glow": "bg-[#4f87c4]"
  },
  "d": {
    "badge": "🅓 D SORCERY",
    "badgeClass": "bg-[#ba595e]/15 border-[#ba595e]/50 text-[#ba595e]",
    "fullHeader": "// D PATTERN //",
    "formulaTag": "// dmd",
    "glow": "bg-[#ba595e]"
  },
  "racket": {
    "badge": "🚀 RACKET METAMAGIC",
    "badgeClass": "bg-[#9f1d20]/15 border-[#9f1d20]/50 text-[#9f1d20]",
    "fullHeader": "// RACKET PATTERN //",
    "formulaTag": "; racket",
    "glow": "bg-[#9f1d20]"
  },
  "scheme": {
    "badge": "λ SCHEME RUNE",
    "badgeClass": "bg-[#d3d3d3]/15 border-[#d3d3d3]/50 text-[#d3d3d3]",
    "fullHeader": "// SCHEME PATTERN //",
    "formulaTag": "; scheme",
    "glow": "bg-[#d3d3d3]"
  },
  "gleam": {
    "badge": "✨ GLEAM ALCHEMY",
    "badgeClass": "bg-[#ffaff3]/15 border-[#ffaff3]/50 text-[#ffaff3]",
    "fullHeader": "// GLEAM PATTERN //",
    "formulaTag": "// gleam run",
    "glow": "bg-[#ffaff3]"
  },
  "pony": {
    "badge": "🐎 PONY WARD",
    "badgeClass": "bg-[#d6d3d1]/15 border-[#d6d3d1]/50 text-[#d6d3d1]",
    "fullHeader": "// PONY PATTERN //",
    "formulaTag": "// ponyc",
    "glow": "bg-[#d6d3d1]"
  },
  "reason": {
    "badge": "🌐 REASONML PACT",
    "badgeClass": "bg-[#dd4b39]/15 border-[#dd4b39]/50 text-[#dd4b39]",
    "fullHeader": "// REASON PATTERN //",
    "formulaTag": "/* reason */",
    "glow": "bg-[#dd4b39]"
  },
  "haxe": {
    "badge": "❌ HAXE TRANSMUTATION",
    "badgeClass": "bg-[#df7900]/15 border-[#df7900]/50 text-[#df7900]",
    "fullHeader": "// HAXE PATTERN //",
    "formulaTag": "// haxe",
    "glow": "bg-[#df7900]"
  },
  "csharp": {
    "badge": "♯ C# EVOCATION",
    "badgeClass": "bg-[#178600]/15 border-[#178600]/50 text-[#178600]",
    "fullHeader": "// CSHARP PATTERN //",
    "formulaTag": "// dotnet run",
    "glow": "bg-[#178600]"
  },
  "objc": {
    "badge": "🍏 OBJ-C RUNES",
    "badgeClass": "bg-[#438eff]/15 border-[#438eff]/50 text-[#438eff]",
    "fullHeader": "// OBJC PATTERN //",
    "formulaTag": "// clang -lobjc",
    "glow": "bg-[#438eff]"
  },
  "matlab": {
    "badge": "🧮 MATLAB THAUMATURGY",
    "badgeClass": "bg-[#e16737]/15 border-[#e16737]/50 text-[#e16737]",
    "fullHeader": "// MATLAB PATTERN //",
    "formulaTag": "% matlab",
    "glow": "bg-[#e16737]"
  },
  "mathematica": {
    "badge": "🐺 WOLFRAM ALCHEMY",
    "badgeClass": "bg-[#dd1100]/15 border-[#dd1100]/50 text-[#dd1100]",
    "fullHeader": "// MATHEMATICA PATTERN //",
    "formulaTag": "(* wolfram *)",
    "glow": "bg-[#dd1100]"
  },
  "groovy": {
    "badge": "🎸 GROOVY HEX",
    "badgeClass": "bg-[#4298b8]/15 border-[#4298b8]/50 text-[#4298b8]",
    "fullHeader": "// GROOVY PATTERN //",
    "formulaTag": "// groovy",
    "glow": "bg-[#4298b8]"
  },
  "eiffel": {
    "badge": "🗼 EIFFEL CONTRACT",
    "badgeClass": "bg-[#0099cc]/15 border-[#0099cc]/50 text-[#0099cc]",
    "fullHeader": "// EIFFEL PATTERN //",
    "formulaTag": "-- eiffel",
    "glow": "bg-[#0099cc]"
  },
  "abap": {
    "badge": "💼 ABAP PACT",
    "badgeClass": "bg-[#e8274b]/15 border-[#e8274b]/50 text-[#e8274b]",
    "fullHeader": "// ABAP PATTERN //",
    "formulaTag": "* abap",
    "glow": "bg-[#e8274b]"
  },
  "rpg": {
    "badge": "⚔️ RPG WARD",
    "badgeClass": "bg-[#0066cc]/15 border-[#0066cc]/50 text-[#0066cc]",
    "fullHeader": "// RPG PATTERN //",
    "formulaTag": "// rpgle",
    "glow": "bg-[#0066cc]"
  },
  "labview": {
    "badge": "🔌 LABVIEW WIRING",
    "badgeClass": "bg-[#fcd91e]/15 border-[#fcd91e]/50 text-[#fcd91e]",
    "fullHeader": "// LABVIEW PATTERN //",
    "formulaTag": "/* labview */",
    "glow": "bg-[#fcd91e]"
  },
  "scratch": {
    "badge": "🐱 SCRATCH MAGIC",
    "badgeClass": "bg-[#4d97ff]/15 border-[#4d97ff]/50 text-[#4d97ff]",
    "fullHeader": "// SCRATCH PATTERN //",
    "formulaTag": "; scratch",
    "glow": "bg-[#4d97ff]"
  },
  "c": {
    "badge": "⚙️ C RUNE",
    "badgeClass": "bg-[#555555]/15 border-[#555555]/50 text-[#555555]",
    "fullHeader": "// C PATTERN //",
    "formulaTag": "$ C_EXEC",
    "glow": "bg-[#555555]"
  },
  "powershell": {
    "badge": "⚙️ POWERSHELL RUNE",
    "badgeClass": "bg-[#012456]/15 border-[#012456]/50 text-[#012456]",
    "fullHeader": "// POWERSHELL PATTERN //",
    "formulaTag": "$ POWERSHELL_EXEC",
    "glow": "bg-[#012456]"
  },
  "vba": {
    "badge": "⚙️ VBA RUNE",
    "badgeClass": "bg-[#861D54]/15 border-[#861D54]/50 text-[#861D54]",
    "fullHeader": "// VBA PATTERN //",
    "formulaTag": "$ VBA_EXEC",
    "glow": "bg-[#861D54]"
  },
  "hack": {
    "badge": "⚙️ HACK RUNE",
    "badgeClass": "bg-[#875A7B]/15 border-[#875A7B]/50 text-[#875A7B]",
    "fullHeader": "// HACK PATTERN //",
    "formulaTag": "$ HACK_EXEC",
    "glow": "bg-[#875A7B]"
  },
  "raku": {
    "badge": "⚙️ RAKU RUNE",
    "badgeClass": "bg-[#0000FB]/15 border-[#0000FB]/50 text-[#0000FB]",
    "fullHeader": "// RAKU PATTERN //",
    "formulaTag": "$ RAKU_EXEC",
    "glow": "bg-[#0000FB]"
  },
  "miranda": {
    "badge": "⚙️ MIRANDA RUNE",
    "badgeClass": "bg-[#005500]/15 border-[#005500]/50 text-[#005500]",
    "fullHeader": "// MIRANDA PATTERN //",
    "formulaTag": "$ MIRANDA_EXEC",
    "glow": "bg-[#005500]"
  },
  "purescript": {
    "badge": "⚙️ PURESCRIPT RUNE",
    "badgeClass": "bg-[#1D222D]/15 border-[#1D222D]/50 text-[#1D222D]",
    "fullHeader": "// PURESCRIPT PATTERN //",
    "formulaTag": "$ PURESCRIPT_EXEC",
    "glow": "bg-[#1D222D]"
  },
  "twine": {
    "badge": "⚙️ TWINE RUNE",
    "badgeClass": "bg-[#005E5E]/15 border-[#005E5E]/50 text-[#005E5E]",
    "fullHeader": "// TWINE PATTERN //",
    "formulaTag": "$ TWINE_EXEC",
    "glow": "bg-[#005E5E]"
  },
  "lean": {
    "badge": "⚙️ LEAN RUNE",
    "badgeClass": "bg-[#555555]/15 border-[#555555]/50 text-[#555555]",
    "fullHeader": "// LEAN PATTERN //",
    "formulaTag": "$ LEAN_EXEC",
    "glow": "bg-[#555555]"
  },
  "isabelle": {
    "badge": "⚙️ ISABELLE RUNE",
    "badgeClass": "bg-[#336699]/15 border-[#336699]/50 text-[#336699]",
    "fullHeader": "// ISABELLE PATTERN //",
    "formulaTag": "$ ISABELLE_EXEC",
    "glow": "bg-[#336699]"
  },
  "alloy": {
    "badge": "⚙️ ALLOY RUNE",
    "badgeClass": "bg-[#B0B0B0]/15 border-[#B0B0B0]/50 text-[#B0B0B0]",
    "fullHeader": "// ALLOY PATTERN //",
    "formulaTag": "$ ALLOY_EXEC",
    "glow": "bg-[#B0B0B0]"
  },
  "cairo": {
    "badge": "⚙️ CAIRO RUNE",
    "badgeClass": "bg-[#FF4C29]/15 border-[#FF4C29]/50 text-[#FF4C29]",
    "fullHeader": "// CAIRO PATTERN //",
    "formulaTag": "$ CAIRO_EXEC",
    "glow": "bg-[#FF4C29]"
  },
  "motoko": {
    "badge": "⚙️ MOTOKO RUNE",
    "badgeClass": "bg-[#0088CC]/15 border-[#0088CC]/50 text-[#0088CC]",
    "fullHeader": "// MOTOKO PATTERN //",
    "formulaTag": "$ MOTOKO_EXEC",
    "glow": "bg-[#0088CC]"
  },
  "plutus": {
    "badge": "⚙️ PLUTUS RUNE",
    "badgeClass": "bg-[#0033AD]/15 border-[#0033AD]/50 text-[#0033AD]",
    "fullHeader": "// PLUTUS PATTERN //",
    "formulaTag": "$ PLUTUS_EXEC",
    "glow": "bg-[#0033AD]"
  },
  "michelson": {
    "badge": "⚙️ MICHELSON RUNE",
    "badgeClass": "bg-[#2B2B2B]/15 border-[#2B2B2B]/50 text-[#2B2B2B]",
    "fullHeader": "// MICHELSON PATTERN //",
    "formulaTag": "$ MICHELSON_EXEC",
    "glow": "bg-[#2B2B2B]"
  },
  "inform7": {
    "badge": "⚙️ INFORM7 RUNE",
    "badgeClass": "bg-[#A52A2A]/15 border-[#A52A2A]/50 text-[#A52A2A]",
    "fullHeader": "// INFORM7 PATTERN //",
    "formulaTag": "$ INFORM7_EXEC",
    "glow": "bg-[#A52A2A]"
  },
  "dhall": {
    "badge": "⚙️ DHALL RUNE",
    "badgeClass": "bg-[#A0A0A0]/15 border-[#A0A0A0]/50 text-[#A0A0A0]",
    "fullHeader": "// DHALL PATTERN //",
    "formulaTag": "$ DHALL_EXEC",
    "glow": "bg-[#A0A0A0]"
  },
  "cue": {
    "badge": "⚙️ CUE RUNE",
    "badgeClass": "bg-[#5886E1]/15 border-[#5886E1]/50 text-[#5886E1]",
    "fullHeader": "// CUE PATTERN //",
    "formulaTag": "$ CUE_EXEC",
    "glow": "bg-[#5886E1]"
  },
  "starlark": {
    "badge": "⚙️ STARLARK RUNE",
    "badgeClass": "bg-[#4B8BBE]/15 border-[#4B8BBE]/50 text-[#4B8BBE]",
    "fullHeader": "// STARLARK PATTERN //",
    "formulaTag": "$ STARLARK_EXEC",
    "glow": "bg-[#4B8BBE]"
  },
  "jsonnet": {
    "badge": "⚙️ JSONNET RUNE",
    "badgeClass": "bg-[#006400]/15 border-[#006400]/50 text-[#006400]",
    "fullHeader": "// JSONNET PATTERN //",
    "formulaTag": "$ JSONNET_EXEC",
    "glow": "bg-[#006400]"
  },
  "chef": {
    "badge": "⚙️ CHEF RUNE",
    "badgeClass": "bg-[#F38C00]/15 border-[#F38C00]/50 text-[#F38C00]",
    "fullHeader": "// CHEF PATTERN //",
    "formulaTag": "$ CHEF_EXEC",
    "glow": "bg-[#F38C00]"
  },
  "chicken": {
    "badge": "⚙️ CHICKEN RUNE",
    "badgeClass": "bg-[#FFCC00]/15 border-[#FFCC00]/50 text-[#FFCC00]",
    "fullHeader": "// CHICKEN PATTERN //",
    "formulaTag": "$ CHICKEN_EXEC",
    "glow": "bg-[#FFCC00]"
  },
  "trefunge": {
    "badge": "⚙️ TREFUNGE RUNE",
    "badgeClass": "bg-[#7B68EE]/15 border-[#7B68EE]/50 text-[#7B68EE]",
    "fullHeader": "// TREFUNGE PATTERN //",
    "formulaTag": "$ TREFUNGE_EXEC",
    "glow": "bg-[#7B68EE]"
  }
};

export function getTypeMeta(type?: string): TypeMeta {
	if (!type) return DEFAULT_TYPE_META;
	return TYPE_META_MAP[type.toLowerCase()] || DEFAULT_TYPE_META;
}
