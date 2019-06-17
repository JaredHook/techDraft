export class BenchmarkField {
  benchmarkField = 
  `
  <div class="ui  right label input">
  <label for="amount" class="ui label">Name</label>
  <input type="text" placeholder="" id="name"  name="name" required #name="ngModel">
  <div class="ui  label">Points</div><div class="ui input">
    <input type="text" placeholder="Search..." maxlength="3" size="3" name="points" required #points="ngModel">
  </div>
</div>
<p *ngIf="!name.valid && name.touched">Please enter a name</p>
<p *ngIf="!points.valid && points.touched">Please enter your score</p> 
  `
}
