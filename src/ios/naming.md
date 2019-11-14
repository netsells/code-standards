# Naming

Descriptive and consistent naming makes software easier to read and understand. Use the Swift naming conventions described in the [API Design Guidelines](https://swift.org/documentation/api-design-guidelines/). Some key takeaways include:

* striving for clarity at the call site
* prioritizing clarity over brevity
* using camel case (not snake case)
* using uppercase for types (and protocols), lowercase for everything else
* including all needed words while omitting needless words
* using names based on roles, not types
* sometimes compensating for weak type information
* striving for fluent usage
* beginning factory methods with make
* naming methods for their side effects
    * verb methods follow the -ed, -ing rule for the non-mutating version
    * noun methods follow the formX rule for the mutating version
    * boolean types should read like assertions
    * protocols that describe what something is should read as nouns
    * protocols that describe a capability should end in -able or -ible
* using terms that don't surprise experts or confuse beginners
* generally avoiding abbreviations
* using precedent for names
* preferring methods and properties to free functions
* casing acronyms and initialisms uniformly up or down
* giving the same base name to methods that share the same meaning
* avoiding overloads on return type
* choosing good parameter names that serve as documentation
* preferring to name the first parameter instead of including its name in the * method name, except as mentioned under Delegates
* labeling closure and tuple parameters
* taking advantage of default parameters