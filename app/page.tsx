const RootPage = () =>  {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <h1 className="text-3xl font-bold text-primary">Welcome to DaisyUI!</h1>
      <button className="btn btn-primary mt-4">Test Button</button>
      <br/>

      <br/>

      <article className="prose pt-4">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their
          children, with the food earning such an iconic status in our culture that kids will often dress
          up as warm, cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
          springing up around the country.
        </p>
      </article>
    </div>
  );
}

export default RootPage;
