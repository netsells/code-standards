# C#

## Naming Conventions

| Object  Name       | Notation                         |
| ------------------ | -------------------------------- |
| Class name         | PascalCase                       |
| Constructor name   | PascaCase                        |
| Method Name        | PascalCase                       |
| Method arguments   | camelCase                        |
| Local varables     | camelCase                        |
| Constants name     | PascalCase                       |
| Private field name | _camelCasePrefixedWithUnderscore |
| Property name      | PascalCase                       |
| Enum type name     | PascalCase                       |


## Layout


Write only one statement per line.

Write only one declaration per line.

Continuation lines should be indented at least one tab stop, in a way that expresses the structure of the statement.

Add at least one blank line between method definitions and property definitions.

Use blank lines to separate code into logical groups

Use parentheses to make clauses in an expression apparent:

``` C#
if ((val1 > val2) && (val1 > val3))
{
    // Take appropriate action.
}
```

## Naming

Use PascalCasing for class names and method names:

``` C#
public class ClientActivity
{
	public void ClearStatistics()
	{
		//...
	}
	public void CalculateStatistics()
	{
		//...
	}
}
```

Use camelCasing for method arguments and local variables:

``` C#
public class UserLog
{
	public void Add(LogEvent logEvent)
	{
		int itemCount = logEvent.Items.Count;
		// ...
	}
}
```

Do not use Hungarian notation or any other type identification in identifiers

``` C#
// Correct
int counter;
string name;
 
// Avoid
int iCounter;
string strName;
```

Do not use Screaming Caps for constants or readonly variables:

``` C#
// Correct
public const string ShippingType = "DropShip";

// Avoid
public const string SHIPPINGTYPE = "DropShip";
```

Use meaningful names for variables. The following example uses seattleCustomers for customers who are located in Seattle:

``` C#
var seattleCustomers = from customer in customers
where customer.City == "Seattle" 
select customer.Name;
```

Avoid using Abbreviations. Exceptions: abbreviations commonly used as names, such as Id, Xml, Ftp, Uri.

``` C#
// Correct
UserGroup userGroup;
Assignment employeeAssignment; 

// Avoid
UserGroup usrGrp;
Assignment empAssignment; 

// Exceptions
CustomerId customerId;
XmlDocument xmlDocument;
FtpHelper ftpHelper;
UriPart uriPart;
```

Do not use Underscores in identifiers. Exception: private or protected fields should be prefixed with an underscore

``` C#
// Correct
public DateTime clientAppointment;
public TimeSpan timeLeft; 

// Avoid
public DateTime client_Appointment;
public TimeSpan time_Left; 

// Exception (Class field)
private DateTime _registrationDate;
```

Do use predefined type names (C# aliases) like int, float, string for local, parameter and member declarations.

``` C#
// Correct
string firstName;
int lastIndex;
bool isSaved;

// Avoid
String firstName;
Int32 lastIndex;
Boolean isSaved;
```

Do use implicit type var for local variable declarations

``` C#
var stream = File.Create(path);
var customers = new Dictionary();
```

Use noun or noun phrases to name a class.

``` C#
public class Employee
{
}

public class BusinessLocation
{
}

public class DocumentCollection
{
}
```

Prefix interfaces with the letter I. Interface names are noun (phrases) or adjectives.

``` C#
public interface IShape
{
}

public interface IShapeCollection
{
}

public interface IGroupable
{
}
```

Do name source files according to their main classes. Exception: file names with partial classes reflect their source or purpose, e.g. designer, generated, etc.

``` C#
// Located in Task.cs
public partial class Task
{
}

// Located in Task.generated.cs
public partial class Task
{
}
```

Organise namespaces and code folders with a clearly defined structure:

``` C#
// Examples
namespace Company.Product.Module.SubModule
{
}

namespace Product.Module.Component
{
}

namespace Product.Layer.Module.Group
{
}
```

Vertically align curly brackets:

``` C#
// Correct
class Program
{
	static void Main(string[] args)
	{
		//...
	}
}
```

Declare all member variables at the top of a class, with static variables at the very top.

``` C#
// Correct
public class Account
{
	public static string BankName;
	public static decimal Reserves; 
	private string _number { get; set; }
	private DateTime_dateOpened { get; set; }
	private DateTime _dateClosed { get; set; }
	private decimal _balance { get; set; } 
	
	public Account()
	{
		// ...
	}
}
```

Use singular names for enums.

``` C#
// Correct
public enum Color
{
	Red,
	Green,
	Blue,
	Yellow,
	Magenta,
	Cyan
} 
```

Do not explicitly specify a type of an enum or values of enums (except enums stored in db fields):

``` C#
// Avoid
public enum Direction : long
{
	North = 1,
	East = 2,
	South = 3,
	West = 4
} 

// Correct
public enum Direction
{
	North,
	East,
	South,
	West
}
```

Do not use an "Enum" suffix in enum type names:

``` C#
// Avoid
public enum CoinEnum
{
	Penny,
	Nickel,
	Dime,
	Quarter,
	Dollar
} 

// Correct
public enum Coin
{
	Penny,
	Nickel,
	Dime,
	Quarter,
	Dollar
}
```

Do not create names of parameters in methods (or constructors) which differ only by the register:

``` C#
// Avoid
private void MyFunction(string name, string Name)
{
	//...
}
```

Use suffix Exception at creation of the new classes comprising the information on exception:

``` C#
// Correct
public class BarcodeReadException : System.Exception
{
}
```

Use suffix Any, Is, Have or similar keywords for boolean identifier :

``` C#
// Correct
public static bool IsNullOrEmpty(string value) 
{
	return (value == null || value.Length == 0);
}
```

## Commenting


Place the comment on a separate line, not at the end of a line of code.

Begin comment text with an uppercase letter.

End comment text with a period.


## Data Types
In general, use int rather than unsigned types. The use of int is common throughout C#, and it is easier to interact with other libraries when you use int.











