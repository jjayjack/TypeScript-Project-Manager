// AutoBind Decorator
function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}
//Project Input class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    // Render HTML to DOM
    const importedHTMLContent = document.importNode(
      this.templateElement.content,
      true
    );
    // this.element = form element
    this.element = importedHTMLContent.firstElementChild as HTMLFormElement;
    // Adding CSS to element created
    this.element.id = "user-input";
    // Get access to inputs
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
    this.attach();
  }
  private getUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert("Invalid input, please try again");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }
  //   empty inputs after submit
  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log([title, desc, people]);
      this.clearInput();
    }
  }
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
